import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

// GET - Get single kelas by ID
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { db } = await connectToDatabase();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const kelas = await db
      .collection("kelas")
      .findOne({ _id: new ObjectId(id) });

    if (!kelas) {
      return NextResponse.json(
        { error: "Kelas tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      ...kelas,
      _id: kelas._id.toString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data kelas" },
      { status: 500 }
    );
  }
}

// PUT - Update kelas (admin only)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || (session.user as { role?: string })?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const body = await req.json();
    const { db } = await connectToDatabase();

    const updateData = { ...body, updatedAt: new Date() };
    delete updateData._id;

    const result = await db
      .collection("kelas")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Kelas tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Kelas berhasil diupdate" });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengupdate kelas" },
      { status: 500 }
    );
  }
}

// DELETE - Delete kelas (admin only)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session || (session.user as { role?: string })?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const { db } = await connectToDatabase();
    const result = await db
      .collection("kelas")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Kelas tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Kelas berhasil dihapus" });
  } catch {
    return NextResponse.json(
      { error: "Gagal menghapus kelas" },
      { status: 500 }
    );
  }
}
