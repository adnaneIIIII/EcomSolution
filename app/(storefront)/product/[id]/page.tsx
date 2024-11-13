import FeaturedProducts from "@/app/components/storefront/FeaturedProducts";
import ImageSlider from "@/app/components/storefront/imageSlider";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { ShoppingBag, StarIcon } from "lucide-react";
import { notFound } from "next/navigation";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      name: true,
      price: true,
      images: true,
      description: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

async function ProductIdRoute({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={data.images} />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>
          <p className="mt-2 text-3xl text-gray-900">${data.price}</p>
          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <p className="text-sm text-gray-500 ml-2">(4.9)</p>
          </div>
          <p className="line-clamp-4 text-base text-gray-700 mt-6">{data.description}</p>

          <Button size="lg" className="w-full mt-5">
            <ShoppingBag className="w-5 h-5 mr-4" /> Add to cart
          </Button>
        </div>
      </div>
      <div className="mt-16">
        <FeaturedProducts/>
      </div>
    </>
  );
}

export default ProductIdRoute;
