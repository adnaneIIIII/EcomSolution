import { deleteProduct } from "@/app/actions";
import { SubmiteBotton } from "@/app/components/submitebutton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import React from "react";

function Delete({ params }: { params: { id: string } }) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Are you absolutey sure?</CardTitle>
          <CardDescription>Click the button below if you are.</CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
        <Button variant="outline">
            <Link href="/dashboard/products">Cancel</Link>
          </Button>
          <form action={deleteProduct}>
            <input type="hidden" name="productId" value={params.id} />
            <SubmiteBotton variant="destructive" text="Delete" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Delete;
