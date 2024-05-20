"use client";

import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FreeShipping from "../banner/free-shipping";
import NavbarActions from "../navbar-actions";
import NavLink from "../ui/nav-link";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 10;

      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`header ${
        isActive && !isScrolled
          ? "bg-black border border-none transition-all duration-300"
          : !isActive && isScrolled
          ? "bg-white border border-none transition-all duration-300"
          : isActive && isScrolled
          ? "bg-black border border-none transition-all duration-300"
          : "bg-white border-none  transition-all ease-in-out duration-300"
      }`}
    >
      <div className="flex flex-col w-full border-b border-b-black/15">
        <FreeShipping />

        <div className="bar mt-2 pb-3">
          <div>
            <Link href="/" className="md:ml-4 flex lg:ml-0 gap-x-2">
              <div className="relative w-[135px] h-[48px]">
                <Image
                  className="hover:scale-110 transition duration-300 ease-in-out object-contain"
                  fill
                  quality={100}
                  src={`${
                    isActive ? "/common/dripends.svg" : "/common/dripends.svg"
                  }`}
                  alt="Dripends logo"
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <NavLink />
          </div>

          <div>
            <div className="flex items-center">
              <SearchIcon className="mr-2" />
              <div>
                <NavbarActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
