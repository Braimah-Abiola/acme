import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import WhyUs from "@/components/why-us";

const ContactPage = () => {
  return (
    <div className="h-fit w-full">
      <Container>
        <div className="w-full flex flex-col items-center pt-40">
          <h2 className=" font-semibold uppercase text-[#1C1C1C] text-3xl">
            Contact
          </h2>
          <div className="flex items-center w-full z-10 gap-5 mt-8 justify-between max-w-4xl">
            <Input
              className=" placeholder:text-black/70 text-black border border-black/20"
              placeholder="Name"
            />
            <Input
              className=" placeholder:text-black/70 text-black border border-black/20"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full z-10 mt-4 max-w-4xl">
            <Textarea placeholder="Message" />
          </div>
          <div className="w-full z-10 mt-4 max-w-4xl">
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
        <div className="h-20 md:h-40" />
        <WhyUs />
      </Container>
    </div>
  );
};

export default ContactPage;
