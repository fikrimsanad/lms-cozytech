import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

// GET - List transaksi
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status");

    const userRole = (session.user as { role?: string })?.role;
    const userId = (session.user as { id?: string })?.id;

    const filter: Record<string, unknown> = {};

    // Non-admin users can only see their own transactions
    if (userRole !== "admin") {
      filter.userId = userId;
    }
    if (status) filter.status = status;

    const total = await db.collection("transaksi").countDocuments(filter);
    const transaksi = await db
      .collection("transaksi")
      .find(filter)
      .sort({ tanggal: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    const serialized = transaksi.map((t) => ({
      ...t,
      _id: t._id.toString(),
    }));

    return NextResponse.json({
      data: serialized,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data transaksi" },
      { status: 500 }
    );
  }
}

// POST - Create transaksi (enroll to class)
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { kelasId, metodePembayaran } = await req.json();
    const userId = (session.user as { id?: string })?.id;

    if (!kelasId) {
      return NextResponse.json(
        { error: "kelasId harus diisi" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Check if class exists
    if (!ObjectId.isValid(kelasId)) {
      return NextResponse.json({ error: "ID kelas tidak valid" }, { status: 400 });
    }

    const kelas = await db
      .collection("kelas")
      .findOne({ _id: new ObjectId(kelasId) });

    if (!kelas) {
      return NextResponse.json(
        { error: "Kelas tidak ditemukan" },
        { status: 404 }
      );
    }

    // Check existing enrollment
    const existingEnroll = await db.collection("enrollments").findOne({
      userId,
      kelasId,
    });

    if (existingEnroll) {
      return NextResponse.json(
        { error: "Anda sudah terdaftar di kelas ini" },
        { status: 409 }
      );
    }

    // Create transaction
    const transaksi = await db.collection("transaksi").insertOne({
      userId,
      kelasId,
      jumlah: kelas.harga,
      status: "pending",
      metodePembayaran: metodePembayaran || "manual",
      tanggal: new Date(),
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Transaksi berhasil dibuat",
        transaksiId: transaksi.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Gagal membuat transaksi" },
      { status: 500 }
    );
  }
}
