import ProductCard from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
        },
        select: {
          id: true,
          name: true,
          price: true,
          images: true,
          description: true,
        },
      });
      return {
        title: "All Products",
        data: data,
      };
    }
    case "men": {
      const data = await prisma.product.findMany({
        where: {
          category: "men",
          status: "published",
        },
        select: {
          id: true,
          name: true,
          price: true,
          images: true,
          description: true,
        },
      });
      return {
        title: "Men Products",
        data: data,
      };
    }
    case "women": {
      const data = await prisma.product.findMany({
        where: {
          category: "women",
          status: "published",
        },
        select: {
          id: true,
          name: true,
          price: true,
          images: true,
          description: true,
        },
      });
      return {
        title: "Women Products",
        data: data,
      };
    }
    case "kid": {
      const data = await prisma.product.findMany({
        where: {
          category: "kids",
          status: "published",
        },
        select: {
          id: true,
          name: true,
          price: true,
          images: true,
          description: true,
        },
      });
      return {
        title: "Kids Products",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

async function CategoriesPage({ params }: { params: { name: string } }) {
  const { title, data } = await getData(params.name);
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight my-5">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {data.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesPage;
