import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import CustomerSatisfaction from "@/components/customer-satisfaction";
import FAQ from "@/components/faq";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import Reviews from "@/components/reviews";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import WhyUs from "@/components/why-us";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="h-40" />
        <div className="px-0.5 sm:px-4 lg:px-80">
          <div className="flex items-center w-full">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 w-full">
              <Gallery images={product.images} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 px-4 sm:px-0 lg:pt-8">
                <div className="mt-14 md:mt-0 mb-14 md:mb-0 px-4 sm:mt-16 sm:px-0 lg:pt-0 lg:-mt-10">
                  <Info data={product} />
                </div>
                {/* <div className="mt-10 md:mt-0">
                  <h3 className="uppercase font-black text-lg mb-0">Info</h3>
                  <p className="text-lg text-primary/80 font-normal">
                    Elevate your look, embrace your style. Unleash the essence
                    of fashion with confidence and comfort in every thread.
                  </p>
                </div> */}

                {/* <div className="md:mt-5">
                  <h3 className="uppercase font-black text-lg mb-0">
                    Material
                  </h3>
                  <p className="text-lg text-primary/80 font-normal">
                    85% organic, ring-spun combed cotton, 15% recycled
                    polyester. 350 GSM fabric - brushed, washed, light sueded.
                  </p>
                </div> */}

                <Accordion
                  type="single"
                  collapsible
                  className="w-full mt-10 bg-white max-w-3xl"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Shipping Information</AccordionTrigger>
                    <AccordionContent>
                      <div className="mb-4">
                        For customers within the UK, we offer a shipping time of
                        <span className="text-black font-bold">
                          {" "}
                          FREE 7-11 Business days
                        </span>
                        , ensuring swift delivery to your doorstep.
                      </div>
                      <div className="mb-4">
                        International orders may take slightly longer, with an
                        estimated shipping time of{" "}
                        <span className="text-black font-bold">
                          8-14 Business days
                        </span>
                        .
                      </div>
                      <div className="mb-4">
                        In the rare event of a delay, rest assured that we will
                        promptly notify you via email, keeping you informed
                        every step of the way.
                      </div>
                      <div>
                        [TRACKING SHOULD BE RECEIVED WITHIN THE FIRST 7 DAYS]
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
        </div>
        <hr className="my-10" />
        <CustomerSatisfaction />
        <hr className="my-10" />
        <FAQ />
        <hr className="my-10" />
        <Reviews />
        <WhyUs />
      </Container>
    </div>
  );
};

export default ProductPage;
