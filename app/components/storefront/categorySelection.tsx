import Link from "next/link";
import React from "react";
import all from "@/public//all.jpg";
import men from "@/public/men.jpg";
import women from "@/public/girl.jpg";
import Image from "next/image";

function CategorySelection() {
  return (
    <div className="py-12 sm:py-24 ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Shop by Category
        </h2>
        <Link
          href="/products/all"
          className="text-sm font-semibold hover:text-primary/80 text-primary"
        >
          Browse All Products &rarr;
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <div className="group aspect-w-2 aspect-h-1  rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
          <Image src={women} alt="all" className="object-cover object-center" />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55" />
          <div className="flex items-end p-6">
            <Link href="/products/women">
              <h3 className="font-semibold text-white ">Women Products</h3>
              <p className=" text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>

        <div className="group aspect-w-2 aspect-h-1  rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image src={men} alt="all" className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <Link href="/products/men">
              <h3 className="font-semibold text-white ">Men Products</h3>
              <p className=" text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>
        <div className="group aspect-w-2 aspect-h-1  rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full">
          <Image src={all} alt="all" className="object-cover object-center sm:absolute sm:inset-0 sm:w-full sm:h-full"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-55 sm:absolute sm:inset-0" />
          <div className="flex items-end p-6 sm:absolute sm:inset-0">
            <Link href="/products/all">
              <h3 className="font-semibold text-white ">All Products</h3>
              <p className=" text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySelection;
