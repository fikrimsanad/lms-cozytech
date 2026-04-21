import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: "user" | "admin" | "instructor";
  createdAt: Date;
  updatedAt: Date;
}

export interface Kelas {
  _id?: ObjectId;
  nama: string;
  deskripsi: string;
  harga: number;
  thumbnail?: string;
  pengajar: string[];
  kategori: string;
  level: "beginner" | "intermediate" | "advanced";
  durasi: string;
  status: "draft" | "published" | "archived";
  syllabus: SyllabusItem[];
  jadwalLive: JadwalLive[];
  videos: Video[];
  files: FileMateri[];
  pesertaCount: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SyllabusItem {
  judul: string;
  deskripsi: string;
  urutan: number;
}

export interface JadwalLive {
  judul: string;
  tanggal: Date;
  waktuMulai: string;
  waktuSelesai: string;
  link?: string;
}

export interface Video {
  judul: string;
  url: string;
  durasi: string;
  urutan: number;
}

export interface FileMateri {
  nama: string;
  url: string;
  tipe: string;
}

export interface Transaksi {
  _id?: ObjectId;
  userId: string;
  kelasId: string;
  jumlah: number;
  status: "pending" | "paid" | "failed" | "refunded";
  metodePembayaran: string;
  tanggal: Date;
  createdAt: Date;
}

export interface Enrollment {
  _id?: ObjectId;
  userId: string;
  kelasId: string;
  progress: number;
  completedVideos: string[];
  sertifikatId?: string;
  enrolledAt: Date;
  updatedAt: Date;
}

export interface Sertifikat {
  _id?: ObjectId;
  userId: string;
  kelasId: string;
  nomorSertifikat: string;
  tanggalTerbit: Date;
  status: "registered" | "issued" | "revoked";
}
