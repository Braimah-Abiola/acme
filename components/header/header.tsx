"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { background, opacity } from "@/anim/anim";
import Nav from "./nav";
import Image from "next/image";
import NavbarActions from "../navbar-actions";
import { SearchIcon } from "lucide-react";
import FreeShipping from "../banner/free-shipping";
import NavLink from "../ui/nav-link";

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
              className="shopContainer items-center"
            >
              <p className="shop">Shop</p>
              <div className="el">
                <NavbarActions />
              </div>
              <SearchIcon />
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className={`${isActive ? "el" : "el2"} w-8 h-8`}
              >
                <div
                  className={`burger ${isActive ? "burgerActive" : ""}`}
                ></div>
              </div>
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
