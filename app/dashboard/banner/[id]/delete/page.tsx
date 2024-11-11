
import { deleteBanner, deleteProduct } from "@/app/actions";
import { SubmiteBotton } from "@/app/components/submitebutton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import React from "react";

export default function Delete({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you sure?</CardTitle>
          <CardDescription>Click the button below if you are you want to delete this banner.</CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="outline">
            <Link href="/dashboard/banner">Cancel</Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="productId" value={params.id} />
            <SubmiteBotton variant="destructive" text="Delete" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
