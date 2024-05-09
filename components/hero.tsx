import Image from "next/image";
import { Button } from "./ui/button";

const LandingHero = () => {
  return (
    <div className="flex flex-col relative w-full bg-[#F7F7F7] h-[100dvh] xl:h-[100vh]">
      <div className=" absolute w-full h-full">
        <div className="w-full h-full relative">
          <Image
            className=" object-cover"
            fill
            src="/common/hero.webp"
            alt=""
          />
        </div>
      </div>
      <div className="absolute w-full h-full bg-black/40" />
      <div className="flex flex-col z-50 absolute w-full justify-center items-center pt-24 md:pt-12 xl:-pt-32 h-full">
        <div className="w-full flex flex-col items-center">
          <p className="text-white/80 font-normal text-lg mb-1.5 md:mb-4">
            Use CODE:{" "}
            <span className="text-[#E37347] font-semibold">ACME10</span> FOR €10
            OFF YOUR ORDER
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold uppercase text-white">
          Spring sale is now live!
        </h1>
        <p className="text-white/80 font-normal text-lg mt-1.5 md:mt-4 max-w-prose text-center">
          Elevate your look, embrace your style. Unleash the essence of fashion
          with confidence and comfort in every thread.
        </p>
        <Button className="w-fit px-10 mt-5 z-50">Shop Now</Button>
      </div>
    </div>
  );
};

export default LandingHero;
