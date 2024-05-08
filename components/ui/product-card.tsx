"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div onClick={handleClick} className="flex flex-col items-start">
      <div className="h-[560px] w-full md:w-[435px] relative bg-[#F7F7F7] cursor-pointer flex items-center justify-center group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out overflow-hidden">
        <Image
          fill
          className=" object-cover hover:scale-110 duration-300 transition ease-in-out"
          src={data.images?.[0]?.url}
          alt="Product image"
        />
      </div>
      <h4 className="uppercase font-bold text-xl md:text-2xl mt-4 md:mt-5">
        {data.name}
      </h4>
      <Currency value={data?.price} />
    </div>
  );
};

export default ProductCard;
