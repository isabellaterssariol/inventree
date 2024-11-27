import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import { userProducts } from "../../mocks";
import ProductCard from "../product-card";

interface ProductStoreProps {
  title: string;
}

export default function ProductStore({ title }: ProductStoreProps) {
  const filteredProducts = userProducts.products.slice(0, 5);

  return (
    <div className="flex flex-col space-y-4 mt-8">
      <div className="flex justify-between items-center">
        <p className="text-[1.1rem] font-semibold text-default">{title}</p>
        <Link
          to="/products"
          className="text-primary text-[0.875rem] font-semibold"
        >
          See All
        </Link>
      </div>

      <div>
        <Splide
          options={{
            infinite: true,
            perPage: 2.2,
            gap: 12,
            rewind: true,
            pagination: false,
            arrows: false,
          }}
        >
          {filteredProducts.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard productId={product.id} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}
