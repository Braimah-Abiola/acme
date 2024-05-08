"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./ui/container";
import { ScreenFitText } from "./ui/full-width-text";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const getCurrentTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        timeZoneName: "short",
      };
      const timeString = new Intl.DateTimeFormat("en-US", options).format(
        new Date()
      );
      setLocalTime(timeString);
    };

    const intervalId = setInterval(getCurrentTime, 60000);

    getCurrentTime();

    return () => clearInterval(intervalId);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1C1C1C] pt-20 pb-10 border-t mt-20 md:mt-0">
      <Container>
        <div className="w-full flex justify-between px-5 gap-20">
          <div className="w-full flex flex-col items-start">
            <Link href="/" className="-mt-2">
              <div className="relative w-[120px] h-[50px]">
                <Image
                  className="hover:scale-110 transition duration-300 ease-in-out"
                  fill
                  src={`${"/common/logo_white.svg"}`}
                  alt="Acme logo"
                />
              </div>
            </Link>
            <p className="text-white/70 text-base w-[70%]">
              Elevate your look, embrace your style. Unleash the essence of
              fashion with confidence and comfort in every thread.
            </p>
          </div>
          <div className="w-1/2 font-medium">
            <h3 className="text-lg text-white mb-4">NAVIGATION</h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/70 text-base">Home</p>
              <p className="text-white/70 text-base">Fast Delivery</p>
              <p className="text-white/70 text-base">Brands</p>
              <p className="text-white/70 text-base">Premium Footwear</p>
              <p className="text-white/70 text-base">Contact Us</p>
            </div>
          </div>
          <div className="w-1/2 font-medium">
            <h3 className="text-lg text-white mb-4">LEGALS</h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/70 text-base">Privacy Policy</p>
              <p className="text-white/70 text-base">Shipping Policy</p>
              <p className="text-white/70 text-base">Refund Policy</p>
              <p className="text-white/70 text-base">Terms of Service</p>
            </div>
          </div>
          <div className="w-full flex flex-col font-medium">
            <h3 className="text-lg text-white mb-4">NEWSLETTER</h3>
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/70 text-base">
                Subscribe to receive updates, access to <br /> exclusive deals,
                and more.
              </p>
              <Input
                className="mt-4 w-[80%]"
                type="email"
                placeholder="Email address"
              />
              <Button className="mt-6 px-8">Subscribe Now</Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-5 items-center w-ful mt-20">
          <div className="flex items-center gap-4">
            <Image width={24} height={24} src="/common/us.png" alt="Currency" />
            <p className="text-white/70 text-base">United States - Dollar</p>
          </div>
          <p className="text-white/70 text-base">©2024 Acme, by AAA Software</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
