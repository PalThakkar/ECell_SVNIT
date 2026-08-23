import AdminNav from "@/components/admin/AdminNav";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-zinc-950">
      <AdminNav />
      {children}
    </div>
  );
}
