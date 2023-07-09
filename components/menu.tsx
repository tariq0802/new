"use client";

import { Home, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SidePanel from "./sidepanel";
import { Separator } from "./ui/separator";
import Link from "next/link";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  return (
    <>
      <div className="flex flex-row gap-4 items-center">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 flex flex-row items-center cursor-pointer hover:shadow-md transition rounded"
        >
          <Menu />
        </div>
      </div>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex justify-between p-6">
          <Image src={"/images/logo.png"} alt="Photo" height={25} width={30} />
          <button
            type="button"
            className="rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close panel</span>
            <X />
          </button>
        </div>
        <Separator className="my-2" />

        <div className="flex h-full flex-col overflow-y-auto shadow-xl">
          <div className="py-4 px-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex flex-row gap-3 items-center p-3 cursor-pointer hover:bg-neutral-100 hover:text-indigo-500 text-neutral-600 transition text-base font-semibold rounded"
            >
              <Home />
              <p>Home</p>
            </Link>
          </div>
        </div>
      </SidePanel>
    </>
  );
};
export default ToggleMenu;
