import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

// GET - List all kelas
export async function GET(req: NextRequest) {
  try {
    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const kategori = searchParams.get("kategori");
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const filter: Record<string, unknown> = {};
    if (kategori) filter.kategori = kategori;
    if (status) filter.status = status;
    if (search) {
      filter.nama = { $regex: search, $options: "i" };
    }

    const total = await db.collection("kelas").countDocuments(filter);
    const kelas = await db
      .collection("kelas")
      .find(filter, { projection: { _id: 1, nama: 1, deskripsi: 1, harga: 1, thumbnail: 1, pengajar: 1, kategori: 1, level: 1, durasi: 1, status: 1, pesertaCount: 1, rating: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    const serialized = kelas.map((k) => ({
      ...k,
      _id: k._id.toString(),
    }));

    return NextResponse.json({
      data: serialized,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data kelas" },
      { status: 500 }
    );
  }
}

// POST - Create new kelas (admin only)
export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || (session.user as { role?: string })?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      nama,
      deskripsi,
      harga,
      thumbnail,
      pengajar,
      kategori,
      level,
      durasi,
      syllabus,
      jadwalLive,
      videos,
      files,
    } = body;

    if (!nama || !deskripsi || harga === undefined) {
      return NextResponse.json(
        { error: "Nama, deskripsi, dan harga harus diisi" },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    const result = await db.collection("kelas").insertOne({
      nama,
      deskripsi,
      harga: Number(harga),
      thumbnail: thumbnail || null,
      pengajar: pengajar || [],
      kategori: kategori || "umum",
      level: level || "beginner",
      durasi: durasi || "",
      status: "draft",
      syllabus: syllabus || [],
      jadwalLive: jadwalLive || [],
      videos: videos || [],
      files: files || [],
      pesertaCount: 0,
      rating: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "Kelas berhasil dibuat",
        kelasId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Gagal membuat kelas" },
      { status: 500 }
    );
  }
}
