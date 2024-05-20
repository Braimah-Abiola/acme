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
  const luxuryProducts = await getProducts({
    categoryId: "fe1cb651-0aa8-42d1-b79c-1da1af2a0e7d",
  });
  return (
    <div>
      <LandingHero />
      {/* <LandingGallery /> */}
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-20 mb-28">
          <ProductList title="Most Popular" items={products} />
        </div>
      </Container>
      <CategoriesSection />
      <Container>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-20 mb-28">
          <ProductList title="Louis Vuitton" items={luxuryProducts} />
        </div>
      </Container>
      <FAQ />
      <div className="h-10" />
      <WhyUs />
      <div className="md:h-10" />
    </div>
  );
};

export default HomePage;
