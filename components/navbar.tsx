import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import ToggleMenu from "./menu";

interface navbarProps {}

const NavBar: React.FC<navbarProps> = ({}) => {
  return (
    <div className="fixed w-full bg-slate-50 z-10 shadow-sm">
      <div className="md:py-4 py-2 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
              <div className="">
                <Image
                  className="rounded-full block md:hidden"
                  alt="Avatar"
                  height="35"
                  width="35"
                  src="/images/logo.png"
                />
              </div>
              <Image
                alt="Logo"
                className="hidden md:block cursor-pointer"
                height="100"
                width="200"
                src="/images/logo1.png"
              />
            </Link>

            <div className="flex items-center">
                <ToggleMenu />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default NavBar;
