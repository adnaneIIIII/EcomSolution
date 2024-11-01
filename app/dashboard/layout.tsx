
import Header from "../components/dashboard/header";

export default function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex items-center justify-between h-16 gap-4 border-b">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Header />
        </nav>


  
      </header>

      {/* Main Content */}
      {children}
    </div>
  );
}
