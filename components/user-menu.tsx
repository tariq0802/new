"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { User, X } from "lucide-react";
import SidePanel from "./sidepanel";
import { Separator } from "./ui/separator";

interface UserMenuProps {}

const UserMenu: React.FC<UserMenuProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="px-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
      >
        <User className="w-5 h-5" />
      </Button>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex justify-between p-6">
          <Image src={"/images/logo.png"} alt="Photo" height={25} width={30} />
          <button
            type="button"
            className="rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close panel</span>
            <X className="w-5 h-5" />
          </button>
        </div>
        <Separator />
      </SidePanel>
    </div>
  );
};
export default UserMenu;
