import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NavLink = () => {
  return (
    <div className="flex items-center font-medium gap-12 text-black/80 w-full">
      <Link href="/">
        <h3 className=" hover:text-black cursor-pointer">HOME</h3>
      </Link>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>CATEGORIES</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Tracksuits</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Trapstar</MenubarItem>
                <MenubarItem>Nike</MenubarItem>
                <MenubarItem>Tech</MenubarItem>
                <MenubarItem>Palm Angels</MenubarItem>
                <MenubarItem>Synaworld</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Short Sets</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Shirts</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>T-Shirts</MenubarItem>
                <MenubarItem>Botton-Ups</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Shoes</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Jordan 1</MenubarItem>
                <MenubarItem>Jordan 4</MenubarItem>
                <MenubarItem>Air Max</MenubarItem>
                <MenubarItem>Prada</MenubarItem>
                <MenubarItem>Alexander McQueen</MenubarItem>
                <MenubarItem>Dior</MenubarItem>
                <Link href="/category/d797fc92-08d9-446b-abcd-8354bb1c9cde">
                  <MenubarItem>Asics</MenubarItem>
                </Link>
                <Link href="/category/fe1cb651-0aa8-42d1-b79c-1da1af2a0e7d">
                  <MenubarItem>LV</MenubarItem>
                </Link>
                <MenubarItem>Slides</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Windrunners</MenubarItem>
            <MenubarItem>Bags</MenubarItem>
            <MenubarItem>Hats & Caps</MenubarItem>
            <MenubarItem>Sunglasses</MenubarItem>
            <MenubarItem>Socks</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Women</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Belts</MenubarItem>
                <MenubarItem>Bags</MenubarItem>
                <MenubarItem>Scarves</MenubarItem>
                <MenubarItem>Sportswear</MenubarItem>
                <MenubarItem>Shirts</MenubarItem>
                <MenubarItem>Jewelery</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <h3 className=" hover:text-black cursor-pointer">PREMIUM FOOTWEAR</h3>
      <h3 className="hover:text-black cursor-pointer">
        <Link href="/contact-us">CONTACT US</Link>
      </h3>
    </div>
  );
};

export default NavLink;
