"use client";

import { background, opacity } from "@/anim/anim";
import { AnimatePresence, motion } from "framer-motion";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FreeShipping from "../banner/free-shipping";
import NavbarActions from "../navbar-actions";
import NavLink from "../ui/nav-link";
import Nav from "./nav";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the scroll threshold as needed
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
          ? "bg-black border border-none transition-all duration-300" // isActive true, isScrolled false
          : !isActive && isScrolled
          ? "bg-white border border-none transition-all duration-300" // isActive false, isScrolled true
          : isActive && isScrolled
          ? "bg-black border border-none transition-all duration-300" // isActive true, isScrolled true
          : "bg-white border-none  transition-all ease-in-out duration-300" // isActive false, isScrolled false
      }`}
    >
      <div className="flex flex-col w-full border-b border-b-black/15">
        <FreeShipping />

        <div className="bar mt-2 pb-3">
          <div>
            <Link href="/" className="md:ml-4 flex lg:ml-0 gap-x-2">
              <div className="relative w-[120px] h-[50px]">
                <Image
                  className="hover:scale-110 transition duration-300 ease-in-out"
                  fill
                  src={`${
                    isActive ? "/common/logo_white.svg" : "/common/logo.svg"
                  }`}
                  alt="Acme logo"
                />
              </div>
            </Link>
          </div>

          <div>
            <NavLink />
          </div>

          <div>
            <motion.div
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="flex items-center"
            >
              <SearchIcon className="mr-2" />
              <div>
                <NavbarActions />
              </div>
              {/* <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`${isActive ? "el" : "el2"} w-8 h-8`}
              >
                <div
                  className={`burger ${isActive ? "burgerActive" : ""}`}
                ></div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="background"
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav handleToggleActive={handleToggleActive} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
