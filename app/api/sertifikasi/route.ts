import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

// GET - List sertifikasi user
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { db } = await connectToDatabase();
    const userId = (session.user as { id?: string })?.id;
    const userRole = (session.user as { role?: string })?.role;

    const filter: Record<string, unknown> = {};
    if (userRole !== "admin") {
      filter.userId = userId;
    }

    const sertifikat = await db
      .collection("sertifikat")
      .find(filter)
      .sort({ tanggalTerbit: -1 })
      .toArray();

    const serialized = sertifikat.map((s) => ({
      ...s,
      _id: s._id.toString(),
    }));

    return NextResponse.json({ data: serialized });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data sertifikasi" },
      { status: 500 }
    );
  }
}

// POST - Register for certification
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { kelasId } = await req.json();
    const userId = (session.user as { id?: string })?.id;

    if (!kelasId || !ObjectId.isValid(kelasId)) {
      return NextResponse.json(
        { error: "kelasId harus diisi dan valid" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Check enrollment
    const enrollment = await db.collection("enrollments").findOne({
      userId,
      kelasId,
    });

    if (!enrollment) {
      return NextResponse.json(
        { error: "Anda belum terdaftar di kelas ini" },
        { status: 400 }
      );
    }

    // Check existing certificate
    const existing = await db.collection("sertifikat").findOne({
      userId,
      kelasId,
    });

    if (existing) {
      return NextResponse.json(
        { error: "Sertifikat sudah terdaftar" },
        { status: 409 }
      );
    }

    const nomorSertifikat = `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const result = await db.collection("sertifikat").insertOne({
      userId,
      kelasId,
      nomorSertifikat,
      tanggalTerbit: new Date(),
      status: "registered",
    });

    return NextResponse.json(
      {
        message: "Registrasi sertifikasi berhasil",
        sertifikatId: result.insertedId.toString(),
        nomorSertifikat,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Gagal mendaftarkan sertifikasi" },
      { status: 500 }
    );
  }
}
