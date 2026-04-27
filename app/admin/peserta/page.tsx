import Link from "next/link";
import { Eye, Search, Users } from "lucide-react";

const pesertaData = [
  { id: "1", nama: "Ahmad Fadli", email: "ahmad@mail.com", kelas: 5, tanggal: "10 Jan 2026" },
  { id: "2", nama: "Siti Rahma", email: "siti@mail.com", kelas: 4, tanggal: "12 Jan 2026" },
  { id: "3", nama: "Budi Hartono", email: "budi@mail.com", kelas: 4, tanggal: "15 Jan 2026" },
  { id: "4", nama: "Dewi Lestari", email: "dewi@mail.com", kelas: 3, tanggal: "18 Jan 2026" },
  { id: "5", nama: "Eko Prasetyo", email: "eko@mail.com", kelas: 3, tanggal: "20 Jan 2026" },
  { id: "6", nama: "Fani Kusuma", email: "fani@mail.com", kelas: 2, tanggal: "22 Jan 2026" },
  { id: "7", nama: "Galih Pratama", email: "galih@mail.com", kelas: 2, tanggal: "25 Jan 2026" },
  { id: "8", nama: "Hana Putri", email: "hana@mail.com", kelas: 1, tanggal: "28 Jan 2026" },
];

export default function AdminPesertaPage() {
  return (
    <div className="space-y-6" data-testid="admin-peserta-page">
      <div><h2 className="text-2xl font-bold text-gray-900">Peserta</h2><p className="text-gray-500 mt-1">Kelola data peserta</p></div>
      <div className="relative max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="text" placeholder="Cari peserta..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400" data-testid="admin-peserta-search" /></div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Nama</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Email</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Kelas Diikuti</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Tanggal Daftar</th>
            <th className="text-left py-3 px-4 text-gray-500 font-medium">Aksi</th>
          </tr></thead>
          <tbody>{pesertaData.map(p => (
            <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-3 px-4"><div className="flex items-center gap-2"><div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{p.nama.charAt(0)}</div><span className="text-gray-900 font-medium">{p.nama}</span></div></td>
              <td className="py-3 px-4 text-gray-500">{p.email}</td>
              <td className="py-3 px-4 text-gray-600">{p.kelas} kelas</td>
              <td className="py-3 px-4 text-gray-500">{p.tanggal}</td>
              <td className="py-3 px-4"><Link href={`/admin/peserta/${p.id}`} className="p-2 hover:bg-gray-100 rounded-lg inline-flex" data-testid={`view-peserta-${p.id}`}><Eye className="w-4 h-4 text-blue-600" /></Link></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
