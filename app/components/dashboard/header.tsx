import Link from "next/link";
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
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

export default function Header() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
}
