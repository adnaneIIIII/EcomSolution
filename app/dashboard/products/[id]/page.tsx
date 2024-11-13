import Editeform from "@/app/components/dashboard/editeform";
import prisma from "@/app/lib/db";

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
      category: true,
      status: true,
      isFeatured: true,
      createAt: true,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

async function EditProduct({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return <Editeform data={data} />;
}

export default EditProduct;
