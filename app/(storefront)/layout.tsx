import Navbar from "../components/storefront/navbar";
import Hero from "../components/storefront/hero";

export default async function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>
      <Navbar />
      <div className="mx-4">
        <Hero />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
    </>
  );
}
