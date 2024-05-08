import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const GeneralAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mt-10 bg-white max-w-3xl"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>When will my order arrive?</AccordionTrigger>
        <AccordionContent>
          <div className="mb-4">
            For customers within the UK, we offer a shipping time of FREE 7-11
            Business days, ensuring swift delivery to your doorstep.
          </div>
          <div className="mb-4">
            International orders may take slightly longer, with an estimated
            shipping time of 8-14 Business days.
          </div>
          <div>
            In the rare event of a delay, rest assured that we will promptly
            notify you via email, keeping you informed every step of the way.
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you charge for returns?</AccordionTrigger>
        <AccordionContent>
          Customers must pay for the return shipping fee. Once we receive the
          return we will provide a full refund of the initial payment amount
          excluding international shipping fees.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I determine my size?</AccordionTrigger>
        <AccordionContent>
          The sizing employed aligns with standard retail measurements; however,
          in instances of uncertainty, we suggest opting for a larger size.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Do you offer international shipping?
        </AccordionTrigger>
        <AccordionContent>
          Yes, we offer international shipping to several countries. You can
          find more details on our Shipping page.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default GeneralAccordion;
