import ProductItem from "@/components/ProductItem";
import { products } from "@/core/store";

export default function Home() {

  return (
    <div className= "grid grid-cols-4 gap-5 container">
      {products.map((product) => (
              <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  );
}
