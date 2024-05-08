import getProducts from "@/actions/get-products";
import ProductList from "./product-list";

const SuggestedProducts = async () => {
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <ProductList title="" items={products} />
    </div>
  );
};

export default SuggestedProducts;
