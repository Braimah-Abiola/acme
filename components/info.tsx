"use client";

import {
  MapPin,
  Plane,
  RotateCcw,
  ShoppingCart,
  Star,
  StarHalfIcon,
} from "lucide-react";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Button } from "./ui/button";
import CurrencyOriginal from "./ui/currency-original";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="uppercase font-semibold text-3xl md:text-5xl">
        {data.name}
      </h1>
      <div className="flex items-center gap-1 py-4">
        <Star fill="#4E35CE" color="#4E35CE" />
        <Star fill="#4E35CE" color="#4E35CE" />
        <Star fill="#4E35CE" color="#4E35CE" />
        <Star fill="#4E35CE" color="#4E35CE" />
        <StarHalfIcon fill="#4E35CE" color="none" />
        <p className="text-black/80 text-base font-normal">(12)</p>
      </div>
      <div className="mt-2 flex items-center gap-4">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
        <p className="text-2xl line-through">
          <CurrencyOriginal value={data?.price} />
        </p>
      </div>
      <div className="flex items-center py-4 gap-10 mt-2">
        <div className="flex items-center gap-2">
          <RotateCcw />
          <p className="text-base">14-Day Money Back Guarantee</p>
        </div>
        <div className="flex items-center gap-2">
          <MapPin />
          <p className="text-base">Free UK Shipping</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Plane />
        <p className="text-base">Worldwide Shipping Available</p>
      </div>
      <hr className="my-6" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="border border-black/20 px-4 py-3 text-base">
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className={`h-6 w-6 rounded-full ml-2`}
            style={{ backgroundColor: data?.color?.value }}
          />
          <h3 className="font-normal text-black text-base">
            {data?.color?.name}
          </h3>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2 px-8 w-fit"
        >
          <ShoppingCart size={20} />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Info;
