import RefundPolicyAccordion from "@/components/accordion/refund-policy";
import Link from "next/link";

import type { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Refund Policy - Dripends",
  description: "...",
};

const RefundPolicy = () => {
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
                <Link className="w-fit" href="/terms-of-service">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </p>
                </Link>
                <p className="text-primary font-medium cursor-pointer">
                  [ Refund Policy ]
                </p>
                <Link href="/shipping-policy">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Shipping Policy
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <h2 className="uppercase text-4xl md:text-7xl font-black">
              Refund Policy
            </h2>

            <p className="text-base mt-2 md:mt-12">
              You can enjoy free refunds on your orders within 14 days after
              your order has been delivered. Please see below for more
              information on our return policy: Certain limitations apply on
              purchases made during sale seasons.
            </p>

            <RefundPolicyAccordion />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default RefundPolicy;
