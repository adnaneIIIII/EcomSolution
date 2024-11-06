import { Button } from "@/components/ui/button";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Products() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2 ">
          <Link href="./products/create" className="flex items-center">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Products</span>
          </Link>
        </Button>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>View all your products</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="w-16 h-16" />
                </TableCell>
                <TableCell>Product 1</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>$24.94</TableCell>
                <TableCell>2024-11-01</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size={"icon"}>
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className=" text-left py-2 bg-gray-50 border border-gray-300 border-opacity-50 rounded-lg"
                    >
                      <DropdownMenuLabel >
                        Action
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="mt-1" />
                      <DropdownMenuItem >Edite</DropdownMenuItem>
                      <DropdownMenuItem >Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
