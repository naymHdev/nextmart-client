"use client";

import Logo from "../../assets/svgs/Logo";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";
import { logout } from "@/services/authService";
import { useUser } from "@/contexts/UserContext";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/constants";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          Next Mart
        </h1>
        <div className="max-w-md  flex-grow">
          <Input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href='/cart'>
            <Button variant="outline" className="rounded-full p-0 size-10">
              <ShoppingBag />
            </Button>
          </Link>
          {user ? (
            <>
              <Link href="/create-shop">
                <Button className="rounded-full text-secondary">
                  Create Shop
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>
                      <User />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <Link href="/user/dashboard">
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuItem>My Orders</DropdownMenuItem>
                  <DropdownMenuSeparator className="border border-neutral-100" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="bg-primary text-secondary hover:text-primary cursor-pointer"
                  >
                    <LogOut /> <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="rounded-full">
                  Login
                </Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
