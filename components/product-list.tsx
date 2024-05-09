import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import { Product } from "@/types";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="py-8 lg:py-0 px-1 md:px-0">
      <p className="text-lg font-normal text-black/70 mb-4 w-full text-center">
        Product Category
      </p>
      <h3 className="uppercase text-3xl md:text-5xl font-bold w-full text-center mb-5 md:mb-10">
        {title}
      </h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 md:gap-10 w-full">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
