import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { auth } from "@/auth";

// GET - List peserta (admin only)
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session || (session.user as { role?: string })?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { db } = await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search");

    const filter: Record<string, unknown> = { role: "user" };
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const total = await db.collection("users").countDocuments(filter);
    const peserta = await db
      .collection("users")
      .find(filter, {
        projection: { password: 0 },
      })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray();

    const serialized = peserta.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }));

    return NextResponse.json({
      data: serialized,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch {
    return NextResponse.json(
      { error: "Gagal mengambil data peserta" },
      { status: 500 }
    );
  }
}
