import Image from "next/image";
import { Phone, ReceiptText, Search, User } from "lucide-react";
import { SheetDemo } from "./hamburgerMenu";
import { NavigationMenuDemo } from "./navigationMenuDemo";

export default function Header() {
  return (
    <main className="w-full  xl:container mx-auto ">
      {/* banner */}
      {/* <figure>
        <div className="md:hidden">
          <Image
            src="/banners/world-cup-mobile.jpg"
            alt="mobilebanner"
            width={1200}
            height={100}
          />
        </div>
        <div className="hidden md:flex">
          <Image
            src="/banners/world-cup.jpg"
            alt="mobilebanner"
            width={1200}
            height={100}
          />
        </div>
      </figure> */}
      <div
        className="flex *:flex *:items-center!
       justify-between md:justify-start items-center py-5 px-5 xl:px-0"
      >
        {/* logo */}
        <div className="gap-2">
          <div className="md:hidden flex">
            <SheetDemo />
          </div>
          <Image src="/logo.svg" width={100} height={50} alt="logo" />
        </div>
        {/* mobile view */}
        <div className="gap-5 md:hidden">
          <span>
            <User size={20} />
          </span>
          <span>
            <ReceiptText size={20} />
          </span>
          <span>
            <Phone size={20} />
          </span>
        </div>
        {/* tablet */}
        <div
          className="hidden! md:flex!
         justify-between! w-full
          pr-10
          "
        >
          {/* right */}
          <NavigationMenuDemo />
          {/* left */}
          <div className="flex gap-6 *:cursor-pointer">
            <span className="text-gray-500">
              <Search size={20}/>
            </span>
            <span className="text-[#fb4d53]" >
              <Phone size={20}/>
            </span>
            <span className="text-[14px]">پیگیری رزرو</span>
            <span className="text-[#fb4d53] " >
              <User size={20}/>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
