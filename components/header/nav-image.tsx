import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { opacity } from "@/anim/anim";

const NavImage = ({ src, isActive }: { src: string; isActive: boolean }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? "open" : "closed"}
      className="imageContainer"
    >
      <Image src={`/gallery/${src}`} fill={true} alt="image" />
    </motion.div>
  );
};

export default NavImage;
