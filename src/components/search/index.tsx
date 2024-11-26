import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="flex items-center border rounded-lg p-2 w-full max-w-lg mt-4">
      <FaSearch color="gray" />
      <input
        type="text"
        placeholder="Search your product"
        className="outline-none border-none w-full text-gray-700 pl-2"
      />
    </div>
  );
}
