import NavSidebar from '@/components/NavSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <NavSidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
