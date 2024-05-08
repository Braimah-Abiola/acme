import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function NotFound() {
  return (
    <div className="">
      <div className="w-full flex flex-col items-center md:justify-center h-screen">
        <Separator className="mt-20" orientation="horizontal" />
        <Marquee speed={15} autoFill className="py-4 md:py-0 overflow-y-hidden">
          <h2 className="uppercase text-9xl md:text-[200px] font-black mr-20">
            404
          </h2>
        </Marquee>
        <Separator orientation="horizontal" />
        <Marquee
          direction="right"
          autoFill
          className="py-4 md:py-0 overflow-y-hidden"
        >
          <h2 className="uppercase text-9xl md:text-[200px] font-black mr-20">
            Page Missing
          </h2>
        </Marquee>
        <Separator orientation="horizontal" />

        <div className="w-full items-center justify-center flex flex-col mt-28">
          <p className="text-lg">Oops! That page seems to be missing.</p>
          <Link href="/">
            <Button className="uppercase mt-5" size="ot" variant="outline">
              <ChevronLeft className="mr-4" /> Back to home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
