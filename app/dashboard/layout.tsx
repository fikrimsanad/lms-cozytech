import Navigation from "./components/navigasi";
import Header from "./components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5">
      <div className="w-full h-screen border-r-1 border-slate-100 sticky top-0">
        <Navigation />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="flex min-h-screen bg-background">
          <div className="flex-1 flex flex-col">
            <main className="flex-1 p-6 space-y-6">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
