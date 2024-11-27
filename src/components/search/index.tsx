import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SearchProps } from "./types";

export default function Search(props: SearchProps) {
  const { onSearchChange } = props;
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="flex items-center border rounded-lg p-2 w-full max-w-lg mt-4 ">
      <FaSearch
        color="gray"
        onClick={handleSearchClick}
        className="cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search your product"
        className="outline-none border-none w-full pl-2 bg-transparent"
        onClick={handleSearchClick}
        onChange={(e) => onSearchChange?.(e.target.value)}
      />
    </div>
  );
}
