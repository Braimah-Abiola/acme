import { CreditCard, Headphones, Truck } from "lucide-react";

const WhyUs = () => {
  return (
    <div className="w-full px-60 pb-20">
      <div className="flex items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <Truck className="text-[#E37347] h-10 w-10 mb-4" />
          <h4 className="text-[#1C1C1C] uppercase text-lg font-medium">
            FREE UK SHIPPING
          </h4>
          <p className=" font-normal text-base text-black/70 w-1/2 text-center">
            Fast and affordable European & Worldwide shipping also available
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <CreditCard className="text-[#E37347] h-10 w-10 mb-4" />
          <h4 className="text-[#1C1C1C] uppercase text-lg font-medium">
            FREE UK SHIPPING
          </h4>
          <p className=" font-normal text-base text-black/70 w-1/2 text-center">
            Your payment information is processed securely.{" "}
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <Headphones className="text-[#E37347] h-10 w-10 mb-4" />
          <h4 className="text-[#1C1C1C] uppercase text-lg font-medium">
            CONTACT US
          </h4>
          <p className=" font-normal text-base text-black/70 w-1/2 text-center">
            Customer support is available at acme@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
