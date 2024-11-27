import { Link } from "react-router-dom";
import { userProducts } from "../../mocks";
import { ProductCardProps } from "./types";

export default function ProductCard({ productId }: ProductCardProps) {
  const product = userProducts.products.find(
    (product) => product.id === productId
  );

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-lg mb-4">
      <Link to={`/product/${product.id}`} className="w-[6rem] h-[6rem] mb-8">
        <img
          src="../../assets/generic_product.png"
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </Link>

      <div className="text-center">
        <h3 className="text-default text-[1rem] font-semibold mb-2">
          {product.title}
        </h3>
        <p className="text-primary text-[0.875rem] font-bold mb-2">
          ${Math.round(product.price)}
        </p>
      </div>
    </div>
  );
}
