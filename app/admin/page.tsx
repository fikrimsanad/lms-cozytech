import { auth } from "@/auth";
import { connectToDatabase } from "@/lib/mongodb";

export default async function AdminDashboardPage() {
  const session = await auth();
  const adminName = session?.user?.name || "Admin";

  let totalPeserta = 0;
  let totalKelas = 0;
  let kelasList: { nama: string; pesertaCount: number; rating: number }[] = [];

  try {
    const { db } = await connectToDatabase();
    totalPeserta = await db.collection("users").countDocuments({ role: "student" });
    totalKelas = await db.collection("kelas").countDocuments();
    kelasList = (await db.collection("kelas")
      .find({}, { projection: { nama: 1, pesertaCount: 1, rating: 1, _id: 0 } })
      .sort({ pesertaCount: -1 })
      .limit(5)
      .toArray()) as { nama: string; pesertaCount: number; rating: number }[];
  } catch {
    // fallback to 0
  }

  return (
    <div className="space-y-8" data-testid="admin-dashboard-page">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900" data-testid="admin-greeting">
          Selamat datang, {adminName}
        </h2>
        <p className="text-gray-500 mt-1">Berikut ringkasan platform LMS CozyTech</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Peserta</p>
          <p className="text-3xl font-bold text-gray-900 mt-2" data-testid="admin-total-peserta">{totalPeserta}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Kelas</p>
          <p className="text-3xl font-bold text-gray-900 mt-2" data-testid="admin-total-kelas">{totalKelas}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Pembayaran</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">Rp 0</p>
          <p className="text-xs text-gray-400 mt-1">Belum ada transaksi</p>
        </div>
      </div>

      {/* Kelas Favorit */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kelas Terpopuler</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">#</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Nama Kelas</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Peserta</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Rating</th>
              </tr>
            </thead>
            <tbody>
              {kelasList.length > 0 ? (
                kelasList.map((kelas, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900 font-medium">{i + 1}</td>
                    <td className="py-3 px-4 text-gray-900">{kelas.nama}</td>
                    <td className="py-3 px-4 text-gray-600">{kelas.pesertaCount.toLocaleString()}</td>
                    <td className="py-3 px-4 text-gray-600">{kelas.rating}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-400">Belum ada data kelas</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
