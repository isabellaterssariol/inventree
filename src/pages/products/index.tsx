import { FaFilter, FaPlus } from "react-icons/fa";
import Button from "../../components/button-generic";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { userProducts } from "../../mocks";
import ProductCard from "../../components/product-card";

export default function ProductsPage() {
  return (
    <main>
      <Header />

      <section className="p-4">
        <h1 className="text-3xl font-semibold text-secondary my-4">
          Products
        </h1>
        <div className="flex justify-center space-x-4">
          <Button text="Add product" icon={FaPlus} />
          <Button text="Filter" icon={FaFilter} />
        </div>
      </section>

      <section className="bg-gray-100 rounded-t-3xl mb-8 pl-4 pr-4 pt-6 pb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xs:grid-cols-1">
          {userProducts.products.map((product) => (
            <ProductCard key={product.id} productId={product.id} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
