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
import { Product, Size } from "@/types";
import { Button } from "./ui/button";
import CurrencyOriginal from "./ui/currency-original";
import qs from "query-string";

import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface InfoProps {
  data: Product;
  sizes: Size[];
}

const Info: React.FC<InfoProps> = ({ data, sizes }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get("sizeId");

  function handleSelectItem(itemId: string) {
    const currentQuery = qs.parse(searchParams.toString());

    const newQuery = { ...currentQuery, ["sizeId"]: itemId };

    if (currentQuery["sizeId"] === itemId) {
      newQuery["sizeId"] = null;
    }

    const url = qs.stringifyUrl(
      { url: window.location.href, query: newQuery },
      { skipNull: true }
    );

    router.push(url);
  }

  return (
    <div>
      <h1 className="uppercase font-semibold text-3xl md:text-5xl">
        {data.name}
      </h1>
      <div className="flex items-center gap-1 py-4">
        <Star fill="#123296" color="#123296" />
        <Star fill="#123296" color="#123296" />
        <Star fill="#123296" color="#123296" />
        <Star fill="#123296" color="#123296" />
        <StarHalfIcon fill="#123296" color="none" />
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
      <div className="flex flex-col md:flex-row md:items-center py-4 gap-6 md:gap-10 mt-2">
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
          <h3 className="font-semibold text-black">Size</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-2 w-full">
          {sizes.map((size) => {
            const isSelected = size.id === selectedValue;
            return (
              <div
                onClick={() => handleSelectItem(size.id)}
                key={size.id}
                className={cn(
                  "border cursor-pointer select-none border-black/20 px-4 py-3 text-base text-black/80 flex items-center justify-center",
                  isSelected ? "border-2 font-medium border-[#123296] text-black" : ""
                )}
              >
                {size.name}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className={`h-6 w-6 rounded-full ml-2 border border-black/10`}
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
          className="flex items-center gap-x-2 md:gap-x-4 px-8 w-full md:w-full h-14"
        >
          <ShoppingCart size={24} />
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default Info;
