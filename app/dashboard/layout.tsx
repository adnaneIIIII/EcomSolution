import { Button } from "@/components/ui/button";
import Header from "../components/dashboard/header";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { CircleUser, MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default async function Dashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const{getUser}=getKindeServerSession();
  const user = await getUser();

  if (!user || user.email === "jan@lenix.de") {
    return redirect("/");
  }
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex items-center justify-between h-16 gap-4 border-b">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Header />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant={"outline"}
              size="icon"
            >
              <MenuIcon className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-6 text-lg font-medium">
              <Header />
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={6} className="bg-gray-100 px-2 w-40 pl-2 rounded-md py-1">
            <DropdownMenuLabel className="font-semibold py-2 ml-2 border-b my-1">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator className=" border-gray-200 hover:bg-gray-200 py-2 pl-4 rounded-sm  my-1 ">
              <DropdownMenuItem  asChild><LogoutLink >Logout</LogoutLink>
              </DropdownMenuItem>
            </DropdownMenuSeparator>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      {/* Main Content */}
      {children}
    </div>
  );
}
