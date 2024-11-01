"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu, GiTalk } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaCar, FaInfoCircle, FaMapMarkedAlt, FaTaxi } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <nav className=" w-full h-20 shadow-md bg-white">
      <div className="flex justify-between  py-2 items-center h-full w-full px-4 2xl:px-16">
        <div>
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={140}
              height={100}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/">
              <li className="mr-9 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Home
              </li>
            </Link>
            <Link href="/car">
              <li className="mr-9 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Car
              </li>
            </Link>
            <Link href="/toure">
              <li className="mr-9 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Toure
              </li>
            </Link>
            <Link href="/taxi">
              <li className="mr-9 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Taxi
              </li>
            </Link>
            <Link href="/about">
              <li className="mr-9 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className=" capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className=" flex-col hidden sm:flex">
          {/* <SignedOut>
            <div className="bg-[#2167f1] cursor-pointer text-white px-4 py-2 rounded-full">
              <SignInButton /> / <SignUpButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn> */}
        </div>
        <div onClick={handleClick} className="sm:hidden cursor-pointer pl-24">
          <GiHamburgerMenu size={25} />
        </div>
      </div>
      <div
        className={
          open
            ? "fixed z-30	top-0 left-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed top-0 z-50 left-[-100%] h-screen p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end md:hidden">
          <div onClick={handleClick} className="mr-2 p-2 cursor-pointer">
            <IoCloseSharp />
          </div>
        </div>
        <div>
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="Logo"
              width={130}
              height={100}
              className="cursor-pointer pb-4"
            />
          </Link>
        </div>
        <div>
          <ul className="md:hidden">
            <Link href="/" className="flex gap-3 items-center">
              <FaHouseChimney />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Home
              </li>
            </Link>
            <Link href="/car" className="flex gap-3 items-center">
              <FaCar />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Car
              </li>
            </Link>
            <Link href="/toure" className="flex gap-3 items-center">
              <FaMapMarkedAlt />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Toure
              </li>
            </Link>
            <Link href="/taxi" className="flex gap-3 items-center">
              <FaTaxi />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Taxi
              </li>
            </Link>
            <Link href="/about" className="flex gap-3 items-center">
            <FaInfoCircle />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                About
              </li>
            </Link>
            <Link href="/contact" className="flex gap-3 items-center">
            <GiTalk />
              <li className="mr-9 py-4 capitalletter hover:text-blue-700 hover:border-b font-semibold text-lg">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex-col py-4 flex sm:hidden">
          {/* <SignedOut>
            <div className="bg-gray-900 text-white px-4 py-2 rounded-full">
              <SignInButton /> / <SignUpButton />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn> */}
        </div>
      </div>
    </nav>
  );
}
