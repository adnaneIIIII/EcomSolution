import prisma from "@/app/lib/db";
import React from "react";
import ProductCard from "./ProductCard";
async function getdata() {
  const data = await prisma.product.findMany({
    where: {
      isFeatured: true,
      status: 'published',
    },
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
      description: true,
      category: true,
    },
    orderBy: {
      createAt: "desc",
    },
    take: 3,
  });
  return data;
}
async function FeaturedProducts() {
  const data = await getdata();
  return (
    <>
      <h2 className=" text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        FeaturedProducts
      </h2>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
            <ProductCard key={item.id}  item={item}/>
        ))}
      </div>
    </>
  );
}

export default FeaturedProducts;
