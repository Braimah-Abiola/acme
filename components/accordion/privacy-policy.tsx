import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PrivacyPolicyAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full mt-10 bg-white">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Dripends?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does Dripends work?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Are there any fees to use Dripends?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.{" "}
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Can I share my nootropic stack configurations with others?
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          aut itaque esse, quo quae, sunt impedit asperiores provident debitis,
          neque quos! Iure aspernatur tempore eveniet aperiam magni praesentium.
          Modi, ea.{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Do you provide guidance on which nootropics to include in my stack?
        </AccordionTrigger>
        <AccordionContent>
          While we do not provide specific medical or nootropic recommendations,
          our platform offers information on various nootropics and their
          effects. You should always consult with a healthcare professional
          before creating a new stack.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          Can I access Dripends on mobile devices?
        </AccordionTrigger>
        <AccordionContent>
          Yes, Dripends is designed to be mobile-responsive. You can access and use
          it on your smartphone or tablet for convenience on the go.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PrivacyPolicyAccordion;
