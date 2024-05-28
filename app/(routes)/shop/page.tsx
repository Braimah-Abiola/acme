import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";

const ShopPage = async () => {
  const airMax = await getProducts({
    categoryId: "fe9a721a-bed1-47c8-8d85-5a487f04aa0e",
  });
  const balanciaga = await getProducts({
    categoryId: "b5527759-5af2-4736-81e3-89b5a479643a",
  });
  const jordan4 = await getProducts({
    categoryId: "1f7483fb-53f6-41af-b558-07ed5276b3d5",
  });
  const prada = await getProducts({
    categoryId: "a3c3bb31-82b7-4fcb-98ec-580aff581083",
  });
  const mcQueen = await getProducts({
    categoryId: "c0893609-3968-4f9a-8e4b-0f0a94ee8ddb",
  });
  const dior = await getProducts({
    categoryId: "d276a0c2-9f90-4b0a-a109-4cd33dc61e82",
  });
  const asics = await getProducts({
    categoryId: "d797fc92-08d9-446b-abcd-8354bb1c9cde",
  });
  const lv = await getProducts({
    categoryId: "fe1cb651-0aa8-42d1-b79c-1da1af2a0e7d",
  });
  const slides = await getProducts({
    categoryId: "a8f1952b-ebde-40bb-a76e-80a2d6cb228f",
  });

  return (
    <div className="bg-white w-full">
      <Container>
        <div className="px-4 w-full sm:px-6 lg:px-8 pb-24 pt-40">
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10">
            <span className=" opacity-60">Categories</span> &gt; AirMax
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {airMax.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Asics
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {asics.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Balanciaga
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {balanciaga.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Dior
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {dior.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28"> 
            <span className=" opacity-60">Categories</span> &gt; Jordan 4
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {jordan4.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Prada
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {prada.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Alexander
            McQueen
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {mcQueen.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; LV
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {lv.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
          <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10 mt-10 md:mt-28">
            <span className=" opacity-60">Categories</span> &gt; Slides
          </h3>
          <div className="w-full">
            <div className="mt-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
                {slides.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopPage;
