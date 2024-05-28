import TermsOfServiceAccordion from "@/components/accordion/terms-of-service";
import Link from "next/link";

import type { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Terms of Service - Dripends",
  description: "...",
};

const TermsOfService = () => {
  return (
    <main className="lg:px-10 w-full px-5">
      <Container>
      <div className="w-full flex flex-row justify-between mt-10">
          <div className="w-full hidden md:block">
            <div className="w-full flex flex-col">
              <h3 className="uppercase text-xl font-bold">Legals</h3>
              <div className="mt-4 text-lg flex flex-col gap-2 text-primary/80">
                <Link className="w-fit" href="/privacy-policy">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Privacy Policy
                  </p>
                </Link>
                <p className="text-primary font-medium cursor-pointer">
                  [ Terms of Service ]
                </p>
                <Link href="/refund-policy">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Refund Policy
                  </p>
                </Link>
                <Link href="/shipping-policy">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Shipping Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="w-[70%] flex flex-row justify-between">
              <h2 className="uppercase text-4xl md:text-7xl font-black">
                Terms
              </h2>
              <h2 className="uppercase text-4xl md:text-7xl font-black">Of</h2>
            </div>
            <h2 className="uppercase text-4xl md:text-7xl font-black">
              Service
            </h2>

            <TermsOfServiceAccordion />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TermsOfService;
