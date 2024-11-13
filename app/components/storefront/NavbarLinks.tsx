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
    href: "/products/women",
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
              ? "bg-muted font-bold"
              : "hover:bg-muted hover:bg-opacity-75",
            "group p-2 font-medium rounded-md"
          )}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default NavbarLinks;
