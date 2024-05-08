import { blur, translate } from "@/anim/anim";
import { motion } from "framer-motion";
import Link from "next/link";

const NavBody = ({
  links,
  selectedLink,
  setSelectedLink,
  handleToggleActive,
}: {
  links: any;
  selectedLink: any;
  setSelectedLink: any;
  handleToggleActive: any;
}) => {
  const getChars = (word: any) => {
    let chars: any = [];
    word.split("").forEach((char: any, i: any) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  return (
    <div className="body">
      {links.map((link: any, index: any) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              onClick={() => handleToggleActive()}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBody;
