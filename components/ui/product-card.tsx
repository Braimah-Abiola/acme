"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import CurrencyOriginal from "./currency-original";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div onClick={handleClick} className="flex flex-col items-center">
      <div className=" h-[450px] md:h-[560px] w-full md:w-[435px] relative bg-[#F7F7F7] cursor-pointer flex items-center justify-center group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out overflow-hidden">
        <Image
          fill
          className=" object-contain hover:scale-110 duration-300 transition ease-in-out"
          src={data.images?.[0]?.url}
          alt="Product image"
        />
      </div>
      <h4 className="uppercase font-semibold text-lg md:text-xl mt-4 md:mt-5">
        {data.name}
      </h4>
      <div className="mt-2 flex items-center gap-4">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
        <p className="text-2xl line-through">
          <CurrencyOriginal value={data?.price} />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
