import { translate } from "@/anim/anim";
import { motion } from "framer-motion";
import Link from "next/link";

const NavFooter = ({ handleToggleActive }: any) => {
  return (
    <div className="footer">
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Made by:</span>
          <Link
            onClick={() => handleToggleActive()}
            className=" hover:underline transition-all ease-in duration-150"
            href="https://studioix.agency"
          >
            Studio IX
          </Link>
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Typography:</span> Inter
        </motion.li>
      </ul>
      <ul>
        <motion.li
          className=" cursor-pointer hover:underline transition-all ease-in duration-200"
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link onClick={() => handleToggleActive()} href="/privacy-policy">
            Privacy Policy
          </Link>
        </motion.li>
        <motion.li
          className=" cursor-pointer hover:underline transition-all ease-in duration-200"
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link onClick={() => handleToggleActive()} href="/terms-of-service">
            Terms of Service
          </Link>
        </motion.li>
      </ul>
      <ul>
        <motion.li
          className=" cursor-pointer hover:underline transition-all ease-in duration-200"
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link onClick={() => handleToggleActive()} href="/shipping-policy">
            Shipping Policy
          </Link>
        </motion.li>
        <motion.li
          className=" cursor-pointer hover:underline transition-all ease-in duration-200"
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Link onClick={() => handleToggleActive()} href="/refund-policy">
            Refund Policy
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default NavFooter;
