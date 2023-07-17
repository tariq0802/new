"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { LogOut, User, X } from "lucide-react";
import SidePanel from "./sidepanel";
import { Separator } from "./ui/separator";
import { User as userType } from "next-auth";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  user: userType;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        className="px-2 text-gray-800 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
      >
        <User className="w-5 h-5" />
      </Button>

      <SidePanel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col h-full justify-between p-6">
          <div className="flex justify-between border-b-2 pb-2">
            <Image
              src={"/images/logo.png"}
              alt="Photo"
              height={25}
              width={30}
            />
            <button
              type="button"
              className="rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close panel</span>
              <X className="w-5 h-5" />
            </button>
          </div>
          <Button
            onClick={(event) => {
              event.preventDefault();
              signOut({
                callbackUrl: `${window.location.origin}/`,
              });
            }}
            variant="destructive"
          >
            <LogOut className="w-5 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </SidePanel>
    </div>
  );
};
export default UserMenu;
