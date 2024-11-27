import { Link } from "react-router-dom";
import { userProducts } from "../../mocks";
import { CategoryCardProps } from "./types";

export default function CategoryCard({ categoryId }: CategoryCardProps) {
  const category = userProducts.categories.find(
    (category) => category.id === categoryId
  );

  if (!category) {
    return null;
  }

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-3 shadow-lg mb-4">
      <Link to={`/category/${category.id}`} className="w-[6rem] h-[6rem] mb-4">
        <img
          src={"../../assets/default_category.png"}
          alt={category.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </Link>

      <div className="text-center">
        <h3 className="text-secondary-dark text-[1rem] font-semibold mb-2">
          {category.title}
        </h3>
        <p className="text-secondary text-[0.75rem] font-medium mb-2">
          {category.description}
        </p>
      </div>
    </div>
  );
}
