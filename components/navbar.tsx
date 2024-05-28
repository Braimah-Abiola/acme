import Link from "next/link";

import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import Image from "next/image";
import FreeShipping from "./banner/free-shipping";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <FreeShipping />
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center mt-2">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <div className="relative w-[120px] h-[50px]">
              <Image
                className="hover:scale-110 transition duration-300 ease-in-out"
                fill
                src="/common/logo.svg"
                alt="Dripends logo"
              />
            </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
