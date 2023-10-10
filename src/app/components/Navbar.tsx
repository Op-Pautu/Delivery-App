import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 md:text-2xl lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1 lg:gap-12 md:text-xl">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl flex-1 md:font-bold md:text-center md:text-3xl">
        <Link href="/">Ain & Dino</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end lg:gap-12 md:text-xl">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 p-2 rounded-md md:absolute top-3 right-2 lg:static flex-nowrap">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="text-sm">123 456 89 </span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
