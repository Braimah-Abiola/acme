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
                <Link href="/category/feac17d6-4e0b-4f15-aa3b-051f105b5f5f">
                  <MenubarItem>Jordan 1</MenubarItem>
                </Link>
                <Link href="/category/1f7483fb-53f6-41af-b558-07ed5276b3d5">
                  <MenubarItem>Jordan 4</MenubarItem>
                </Link>
                <Link href="/category/fe9a721a-bed1-47c8-8d85-5a487f04aa0e">
                  <MenubarItem>Air Max</MenubarItem>
                </Link>
                <Link href="/category/b5527759-5af2-4736-81e3-89b5a479643a">
                  <MenubarItem>Balanciaga</MenubarItem>
                </Link>
                <Link href="/category/a3c3bb31-82b7-4fcb-98ec-580aff581083">
                  <MenubarItem>Prada</MenubarItem>
                </Link>
                <Link href="/category/c0893609-3968-4f9a-8e4b-0f0a94ee8ddb">
                  <MenubarItem>Alexander McQueen</MenubarItem>
                </Link>
                <Link href="/category/d276a0c2-9f90-4b0a-a109-4cd33dc61e82">
                  <MenubarItem>Dior</MenubarItem>
                </Link>
                <Link href="/category/d797fc92-08d9-446b-abcd-8354bb1c9cde">
                  <MenubarItem>Asics</MenubarItem>
                </Link>
                <Link href="/category/fe1cb651-0aa8-42d1-b79c-1da1af2a0e7d">
                  <MenubarItem>LV</MenubarItem>
                </Link>
                <Link href="/category/a8f1952b-ebde-40bb-a76e-80a2d6cb228f">
                  <MenubarItem>Slides</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Windrunners</MenubarItem>
            <MenubarItem>Bags</MenubarItem>
            <MenubarItem>Hats & Caps</MenubarItem>
            <MenubarItem>Sunglasses</MenubarItem>
            <Link href="/category/eaa55794-5fd7-4ccb-92f6-1bf68c01afc7">
              <MenubarItem>Socks</MenubarItem>
            </Link>
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
