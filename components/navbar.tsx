"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import ToggleMenu from "./menu";
import UserMenu from "./user-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Icons } from "./icons";
import { ListItem } from "./list-item";
import { LogIn } from "lucide-react";
import { HomeIcon } from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { buttonVariants } from "./ui/button";

interface NavbarProps {
  session: Session | null;
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const NavBar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <div className="fixed w-full bg-cyan-100 z-10 shadow-sm">
      <div className="flex flex-col">
        <Container>
          <div className="flex flex-row md:py-4 py-2 items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <div className="">
                <Image
                  className="rounded-full block md:hidden"
                  alt="Avatar"
                  height="35"
                  width="35"
                  src="/images/logo.png"
                  priority
                />
              </div>
              <Image
                alt="Logo"
                className="hidden md:block cursor-pointer"
                height="100"
                width="200"
                src="/images/logo1.png"
                priority
              />
            </Link>

            <div className="flex items-center">
              {session?.user ? (
                <UserMenu user={session.user} />
              ) : (
                <Link
                  href="/sign-in"
                  className={
                    (buttonVariants({ variant: "ghost" }),
                    "p-2 rounded text-gray-800 hover:text-black hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white")
                  }
                >
                  <LogIn className="h-4 w-5" />
                </Link>
              )}

              <ToggleMenu />
            </div>
          </div>
        </Container>

        <div className="flex flex-row justify-center items-center bg-slate-800 text-slate-100 text-sm">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <HomeIcon className="h-4 w-4" />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent rounded-none px-2">
                  Articles
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="h-10 w-10" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-2">
                  Components
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
