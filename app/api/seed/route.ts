import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST() {
  try {
    const { db } = await connectToDatabase();

    await db.collection("users").createIndex({ email: 1 }, { unique: true });

    const hashedPassword = await bcrypt.hash("123456", 12);

    // Seed admin
    const adminExists = await db.collection("users").findOne({ email: "admin@mail.com" });
    if (!adminExists) {
      await db.collection("users").insertOne({
        name: "Admin",
        email: "admin@mail.com",
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
      });
    }

    // Seed student
    const userExists = await db.collection("users").findOne({ email: "user@mail.com" });
    if (!userExists) {
      await db.collection("users").insertOne({
        name: "User",
        email: "user@mail.com",
        password: hashedPassword,
        role: "student",
        createdAt: new Date(),
      });
    }

    // Seed sample kelas
    const kelasCount = await db.collection("kelas").countDocuments();
    if (kelasCount === 0) {
      await db.collection("kelas").insertMany([
        {
          nama: "Unity Game Development Mastery",
          deskripsi: "Master Unity engine dari dasar hingga advanced.",
          harga: 3500000,
          pengajar: ["Andi Wijaya"],
          kategori: "Unity Development",
          level: "intermediate",
          durasi: "12 Weeks",
          status: "published",
          pesertaCount: 2847,
          rating: 4.9,
          createdAt: new Date(),
        },
        {
          nama: "Unreal Engine 5 Masterclass",
          deskripsi: "Pelajari Unreal Engine 5 untuk membuat game AAA quality.",
          harga: 4500000,
          pengajar: ["Budi Santoso"],
          kategori: "Unreal Engine",
          level: "advanced",
          durasi: "16 Weeks",
          status: "published",
          pesertaCount: 1520,
          rating: 4.8,
          createdAt: new Date(),
        },
        {
          nama: "3D Modeling & Animation Blender",
          deskripsi: "Master 3D modeling menggunakan Blender untuk game assets.",
          harga: 2800000,
          pengajar: ["Citra Dewi"],
          kategori: "3D Art",
          level: "beginner",
          durasi: "10 Weeks",
          status: "published",
          pesertaCount: 980,
          rating: 4.7,
          createdAt: new Date(),
        },
      ]);
    }

    return NextResponse.json({ message: "Seed berhasil: admin@mail.com & user@mail.com (password: 123456)" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Gagal seed data" }, { status: 500 });
  }
}
