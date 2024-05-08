"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBody from "./nav-body";
import NavFooter from "./nav-footer";
import { height } from "@/anim/anim";
import NavImage from "./nav-image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "1.png",
  },
  {
    title: "Shop",
    href: "/shop",
    src: "2.png",
  },
  {
    title: "About Us",
    href: "/about",
    src: "3.png",
  },
  {
    title: "Lookbook",
    href: "/lookbook",
    src: "4.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "5.png",
  },
];

const Nav = ({ handleToggleActive }: any) => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="nav"
    >
      <div className="wrapper">
        <div className="container">
          <NavBody
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            handleToggleActive={handleToggleActive}
          />
          <NavFooter handleToggleActive={handleToggleActive} />
        </div>
        <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
      </div>
    </motion.div>
  );
};

export default Nav;
