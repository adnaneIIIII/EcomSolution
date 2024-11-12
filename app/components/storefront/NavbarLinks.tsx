"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarlinks = [
  {
    id: 0,
    title: "Home",
    href: "/",
  },
  {
    id: 1,
    title: "All Products",
    href: "/products/all",
  },
  {
    id: 2,
    title: "Men",
    href: "/products/men",
  },
  {
    id: 3,
    title: "Women",
    href: "/products/Women",
  },
  {
    id: 4,
    title: "Kids",
    href: "/products/kid",
  },
];
function NavbarLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex justify-center items-center gap-x-2 ml-5">
      {navbarlinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-black font-bold"
              : "text-muted-foreground font-medium hover:text-foreground"
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinks;
