import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { DollarSign, PartyPopper, ShoppingBag, Users } from "lucide-react";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$45,231</p>
            <p className="text-xs text-muted-foreground">Based on 12 Jun</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">
              Total Sales on ShoeMar
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Products</CardTitle>
            <PartyPopper className="w-4 h-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">37</p>
            <p className="text-xs text-muted-foreground">
              Total Products Created
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Users</CardTitle>
            <Users className="w-4 h-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">120</p>
            <p className="text-xs text-muted-foreground">
              Total Users on Signed Up
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions </CardTitle>
            <CardDescription>View all transactions</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sale</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <Avatar className="bg-gray-200 rounded-[25px] p-2 hidden sm:flex items-center justify-center h-9 w-9">
                <AvatarFallback>AE</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Adnane El Otmani</p>
                <p className="text-sm text-muted-foreground">
                  adnane.otmani@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+24.94</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="bg-gray-200 rounded-[25px] p-2 hidden sm:flex items-center justify-center h-9 w-9">
                <AvatarFallback>AE</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Adnane El Otmani</p>
                <p className="text-sm text-muted-foreground">
                  adnane.otmani@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+24.94</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="bg-gray-200 rounded-[25px] p-2 hidden sm:flex items-center justify-center h-9 w-9">
                <AvatarFallback>AE</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Adnane El Otmani</p>
                <p className="text-sm text-muted-foreground">
                  adnane.otmani@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+24.94</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="bg-gray-200 rounded-[25px] p-2 hidden sm:flex items-center justify-center h-9 w-9">
                <AvatarFallback>AE</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Adnane El Otmani</p>
                <p className="text-sm text-muted-foreground">
                  adnane.otmani@gmail.com
                </p>
              </div>
              <p className="ml-auto font-medium">+24.94</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
