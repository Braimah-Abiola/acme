import Image from "next/image";
import { Button } from "./ui/button";

const CategoriesSection = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex items-center justify-between h-[40rem] relative">
        <div className="w-full bg-black h-full group">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              fill
              src="/common/nike.webp"
              className=" object-cover object-right group-hover:scale-110 ease-in-out duration-500"
              alt="asdfasdf"
            />
          </div>
          <div className="w-full h-full absolute top-0 bg-black/30" />

          <div className="w-full absolute bottom-10 px-[20px]">
            <h4 className=" text-3xl text-white uppercase mb-4 font-medium">
              Nike
            </h4>
            <Button variant="secondary" className=" px-12">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full bg-black h-full group">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              fill
              src="/common/lv.webp"
              className=" object-cover object-right group-hover:scale-110 ease-in-out duration-500"
              alt="asdfasdf"
            />
          </div>
          <div className="w-full h-full absolute top-0 bg-black/30" />

          <div className="w-full absolute bottom-10 px-[20px]">
            <h4 className=" text-3xl text-white uppercase mb-4 font-medium">
              LV
            </h4>
            <Button variant="secondary" className=" px-12">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full bg-black h-full group">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              fill
              src="/common/esntls.webp"
              className=" object-cover object-right group-hover:scale-110 ease-in-out duration-500"
              alt="asdfasdf"
            />
          </div>
          <div className="w-full h-full absolute top-0 bg-black/40" />

          <div className="w-full absolute bottom-10 px-[20px]">
            <h4 className=" text-3xl text-white uppercase mb-4 font-medium">
              ESNTLS
            </h4>
            <Button variant="secondary" className=" px-12">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full bg-black h-full group">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              fill
              src="/common/ralph.webp"
              className=" object-cover object-right group-hover:scale-110 ease-in-out duration-500"
              alt="asdfasdf"
            />
          </div>
          <div className="w-full h-full absolute top-0 bg-black/30" />
          <div className="w-full absolute bottom-10 px-[20px]">
            <h4 className=" text-3xl text-white uppercase mb-4 font-medium">
              RALPH LAUREN
            </h4>
            <Button variant="secondary" className=" px-12">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
