import DashNavBar from "@/components/layout/dashNavbar";
import DashSidebar from "@/components/layout/sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <DashNavBar />
      <div className="flex flex-row w-full h-full">
        <DashSidebar />
        {children}
      </div>
    </div>
  );
}
