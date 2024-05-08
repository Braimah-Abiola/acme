import Image from "next/image";
import Container from "./ui/container";
import { Button } from "./ui/button";

const LandingHero = () => {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F7] h-[100dvh] xl:h-[110vh]">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center pt-24 md:pt-12 px-20">
          <div className="flex flex-col w-full pl-4 pr-4 md:pl-7 md:pr-0 md:-mt-20">
            <p className="text-primary/80 font-normal text-lg mb-1.5 md:mb-4 w-full md:w-[70%]">
              Use CODE:{" "}
              <span className="text-[#E37347] font-semibold">ACME10</span> FOR
              $10 OFF YOUR ORDER
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black uppercase text-[#1C1C1C] w-full md:w-[90%]">
              Spring sale is now live!
            </h1>
            <p className="text-primary/80 font-normal text-lg mt-1.5 md:mt-4 w-full md:w-[60%]">
              Elevate your look, embrace your style. Unleash the essence of
              fashion with confidence and comfort in every thread.
            </p>
            <Button className="w-fit px-10 mt-5 z-50">Shop Now</Button>
          </div>

          <div className="w-full mt-5 md:mt-0 bg-[#F7F7F7]">
            <Image
              width={1000}
              height={1200}
              src="/common/hero_image_two.png"
              alt="Hero image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LandingHero;
