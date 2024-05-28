import TermsOfServiceAccordion from "@/components/accordion/terms-of-service";
import Link from "next/link";

import type { Metadata } from "next";
import Container from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Privacy Policy - Dripends",
  description: "...",
};

const PrivacyPolicy = () => {
  return (
    <main className="lg:px-10 px-5">
      <Container>
        <div className="w-full flex flex-row justify-between mt-10">
          <div className="w-full hidden md:block">
            <div className="w-full flex flex-col">
              <h3 className="uppercase text-xl font-bold">Legals</h3>
              <div className="mt-4 text-lg flex flex-col gap-2 text-primary/80">
                <p className="text-primary font-medium cursor-pointer">
                  [ Privacy Policy ]
                </p>
                <Link className="w-fit" href="/terms-of-service">
                  <p className=" hover:text-primary transition-colors cursor-pointer">
                    Terms of Service
                  </p>
                </Link>
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
            <h2 className="uppercase text-4xl md:text-7xl font-black">
              Privacy Policy
            </h2>

            <p className="text-base mt-2 md:mt-12">
              Our privacy policy updated to include the requirements of the
              General Data Protection Regulation (GDPR), can help make sure our
              business complies with the law and encourages customer trust.
            </p>

            <p className="text-base mt-2 md:mt-4">
              This Privacy Policy describes how our personal information is
              collected, used, and shared when you visit or make a purchase from
              collected, used, and shared when you visit or make a purchase from
              Dripends.com (the “https://dripends.com”).
            </p>

            <TermsOfServiceAccordion />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PrivacyPolicy;
