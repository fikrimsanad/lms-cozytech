import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST() {
  try {
    const { db } = await connectToDatabase();

    // Create indexes
    await db.collection("users").createIndex({ email: 1 }, { unique: true });
    await db.collection("kelas").createIndex({ nama: 1 });
    await db.collection("kelas").createIndex({ status: 1 });
    await db.collection("transaksi").createIndex({ userId: 1 });
    await db.collection("transaksi").createIndex({ status: 1 });
    await db.collection("enrollments").createIndex(
      { userId: 1, kelasId: 1 },
      { unique: true }
    );
    await db.collection("sertifikat").createIndex({ userId: 1, kelasId: 1 });

    // Seed admin user
    const adminExists = await db
      .collection("users")
      .findOne({ email: "admin@cozytech.com" });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash("admin123", 12);
      await db.collection("users").insertOne({
        name: "Admin CozyTech",
        email: "admin@cozytech.com",
        password: hashedPassword,
        role: "admin",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Seed test user
    const userExists = await db
      .collection("users")
      .findOne({ email: "user@cozytech.com" });

    if (!userExists) {
      const hashedPassword = await bcrypt.hash("user123", 12);
      await db.collection("users").insertOne({
        name: "Fikri Mahendra",
        email: "user@cozytech.com",
        password: hashedPassword,
        role: "user",
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Seed sample kelas
    const kelasCount = await db.collection("kelas").countDocuments();
    if (kelasCount === 0) {
      await db.collection("kelas").insertMany([
        {
          nama: "Unity Game Development Mastery",
          deskripsi:
            "Master Unity engine dari dasar hingga advanced. Buat game 2D dan 3D dengan C# scripting, physics, dan game mechanics.",
          harga: 3500000,
          thumbnail:
            "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85",
          pengajar: ["Andi Wijaya"],
          kategori: "Unity Development",
          level: "intermediate",
          durasi: "12 Weeks",
          status: "published",
          syllabus: [
            {
              judul: "Pengenalan Unity",
              deskripsi: "Dasar-dasar Unity Engine dan interface",
              urutan: 1,
            },
            {
              judul: "C# Scripting",
              deskripsi: "Pemrograman C# untuk game development",
              urutan: 2,
            },
            {
              judul: "Physics & Collision",
              deskripsi: "Implementasi physics dan collision detection",
              urutan: 3,
            },
          ],
          jadwalLive: [
            {
              judul: "Live Session: Unity Basics",
              tanggal: new Date("2026-02-15"),
              waktuMulai: "09:00",
              waktuSelesai: "12:00",
              link: "",
            },
            {
              judul: "Live Session: C# Deep Dive",
              tanggal: new Date("2026-02-22"),
              waktuMulai: "09:00",
              waktuSelesai: "12:00",
              link: "",
            },
          ],
          videos: [
            {
              judul: "Intro to Unity",
              url: "",
              durasi: "16 Menit",
              urutan: 1,
            },
            {
              judul: "Unity Interface Tour",
              url: "",
              durasi: "22 Menit",
              urutan: 2,
            },
          ],
          files: [],
          pesertaCount: 2847,
          rating: 4.9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "Unreal Engine 5 Masterclass",
          deskripsi:
            "Pelajari Unreal Engine 5 untuk membuat game AAA quality. Blueprint, C++, Nanite, Lumen, dan MetaHuman.",
          harga: 4500000,
          thumbnail:
            "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85",
          pengajar: ["Budi Santoso"],
          kategori: "Unreal Engine",
          level: "advanced",
          durasi: "16 Weeks",
          status: "published",
          syllabus: [
            {
              judul: "UE5 Fundamentals",
              deskripsi: "Dasar-dasar Unreal Engine 5",
              urutan: 1,
            },
            {
              judul: "Blueprint Programming",
              deskripsi: "Visual scripting dengan Blueprint",
              urutan: 2,
            },
          ],
          jadwalLive: [
            {
              judul: "Live Session: UE5 Setup",
              tanggal: new Date("2026-03-01"),
              waktuMulai: "14:00",
              waktuSelesai: "17:00",
              link: "",
            },
          ],
          videos: [
            {
              judul: "Getting Started with UE5",
              url: "",
              durasi: "25 Menit",
              urutan: 1,
            },
          ],
          files: [],
          pesertaCount: 1520,
          rating: 4.8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nama: "3D Modeling & Animation Blender",
          deskripsi:
            "Master 3D modeling, texturing, rigging, dan animation menggunakan Blender untuk game assets.",
          harga: 2800000,
          thumbnail:
            "https://images.unsplash.com/photo-1698945298361-365595d400eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjB3b3Jrc3BhY2V8ZW58MHx8fGJsYWNrfDE3NjYwMzg4NDR8MA&ixlib=rb-4.1.0&q=85",
          pengajar: ["Citra Dewi"],
          kategori: "3D Art",
          level: "beginner",
          durasi: "10 Weeks",
          status: "published",
          syllabus: [
            {
              judul: "Blender Basics",
              deskripsi: "Interface dan navigasi Blender",
              urutan: 1,
            },
            {
              judul: "3D Modeling",
              deskripsi: "Teknik modeling objek 3D",
              urutan: 2,
            },
          ],
          jadwalLive: [],
          videos: [
            {
              judul: "Blender Interface",
              url: "",
              durasi: "18 Menit",
              urutan: 1,
            },
          ],
          files: [],
          pesertaCount: 980,
          rating: 4.7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }

    return NextResponse.json({ message: "Seed data berhasil" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Gagal seed data" },
      { status: 500 }
    );
  }
}
