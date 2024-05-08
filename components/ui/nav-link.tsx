import Link from "next/link";

const NavLink = () => {
  return (
    <div className="flex items-center font-medium gap-12 text-black/80 w-full">
      <h3 className=" hover:text-black cursor-pointer">HOME</h3>
      <h3 className=" hover:text-black cursor-pointer">BRANDS</h3>
      <h3 className=" hover:text-black cursor-pointer">PREMIUM FOOTWEAR</h3>
      <h3 className="hover:text-black cursor-pointer">
        <Link href="/contact-us">CONTACT US</Link>
      </h3>
    </div>
  );
};

export default NavLink;
