import Link from "next/link";
import React from "react";
import NavbarLinks from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBag } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="w-full max-w-7xl mx-auto px-2 lg:px-8  py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-xl lg:text-3xl font-black text-black">
            Golden<span className="text-yellow-500">HOG</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>
      <div className="flex items-center">
        {user ? (
          <>
            <Link href={"/bag"} className="group p-2 flex items-center mr-2">
              <ShoppingBag className="w-6 h-6 text-gray-500 group-hover:text-gray-700" />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                5
              </span>
            </Link>
            <UserDropdown
              email={user.email as string}
              name={`${user.given_name} ${user.family_name}`as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
            <Button variant={"ghost"} asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
            <span className="h-6 w-px bg-gray-900"></span>
            <Button variant={"ghost"} asChild>
              <RegisterLink>Create Account</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
