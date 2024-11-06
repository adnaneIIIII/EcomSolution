"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "orders",
    href: "/dashboard/orders",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-black font-bold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
