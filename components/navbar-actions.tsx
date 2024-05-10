"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-white hover:bg-white text-black"
      >
        <ShoppingCart size={24} color="black" />
        <span className="ml-2 text-sm font-medium h-6 w-6 bg-[#4E35CE] rounded-full flex items-center justify-center text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
