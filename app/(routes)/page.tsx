import getProducts from "@/actions/get-products";
import CategoriesSection from "@/components/categories-section";
import FAQ from "@/components/faq";
import LandingHero from "@/components/hero";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import WhyUs from "@/components/why-us";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <LandingHero />
      {/* <LandingGallery /> */}
      <CategoriesSection />
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-40">
          <ProductList title="Featured Products" items={products} />
        </div>
      </Container>
      <FAQ />
      <WhyUs />
    </div>
  );
};

export default HomePage;
