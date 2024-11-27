import { useState } from "react";
import { userProducts } from "../../mocks";
import ProductCard from "../../components/product-card";
import Search from "../../components/search";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = userProducts.products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-secondary-light p-4">
      <div className="w-full max-w-lg mb-6">
        <Search onSearchChange={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} productId={product.id} />
          ))
        ) : (
          <p className="text-primary-dark text-lg">No products found</p>
        )}
      </div>
    </div>
  );
}
