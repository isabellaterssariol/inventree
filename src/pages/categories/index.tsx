import { FaPlus } from "react-icons/fa";
import ButtonGeneric from "../../components/button-generic";
import { userProducts } from "../../mocks";
import CategoryCard from "../../components/category-card";

export default function CategoriesPage() {
  return (
    <>
      <section className="p-4">
        <h1 className="text-3xl font-semibold text-secondary my-4">
          Categories
        </h1>
        <div className="flex justify-start">
          <ButtonGeneric text={"Add category"} icon={FaPlus} />
        </div>
      </section>

      <section className="bg-gray-100 rounded-t-3xl mb-8 pl-4 pr-4 pt-6 pb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xs:grid-cols-1">
          {userProducts.categories.map((category) => (
            <CategoryCard key={category.id} categoryId={category.id} />
          ))}
        </div>
      </section>
    </>
  );
}
