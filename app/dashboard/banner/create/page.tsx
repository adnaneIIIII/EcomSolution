"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { ChevronLeft, Images } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import React from "react";
import { SubmiteBotton } from "@/app/components/submitebutton";
import { UploadDropzone } from "@/app/lib/uploadthing";
import { useState, useActionState } from "react";
import { createBanner } from "@/app/actions";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema } from "@/app/lib/zodSchemas";
import { useForm } from "@conform-to/react";
import Image from "next/image";

function BannerRoute() {
  const [Images, setImages] = useState<string | undefined>();
  const [lastResult, action] = useActionState(createBanner, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: bannerSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action}>
      <div className="flex items-center gap-x-4">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={"/dashboard/banner"}>
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tighter">New Banner</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Banner Details</CardTitle>
          <CardDescription>Enter your banner details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                name={fields.title.name}
                key={fields.title.key}
                defaultValue={fields.title.initialValue}
                type="text"
                placeholder="Banner Name"
              />
              <p className="text-red-500">{fields.title.errors}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <Input
                name={fields.imageString.name}
                key={fields.imageString.key}
                defaultValue={fields.imageString.initialValue}
                type="hidden"
                value={Images}
              />
              {Images !== undefined ? (
                <Image
                  src={Images}
                  width={200}
                  height={200}
                  alt="Product Image"
                  className="w-[200px] h-[200px] object-cover border rounded-lg"
                />
              ) : (
                <UploadDropzone
                  onClientUploadComplete={(res) => {
                    setImages(res[0].url);
                  }}
                  onUploadError={() => {
                    alert("Image upload failed");
                  }}
                  endpoint="bannerImageRoute"
                />
              )}
              <p className="text-red-500">{fields.imageString.errors}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <SubmiteBotton variant="default" text="Add Banner" />
        </CardFooter>
      </Card>
    </form>
  );
}

export default BannerRoute;
