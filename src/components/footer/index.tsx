import { FaHome, FaHeart, FaUserAlt, FaThList } from "react-icons/fa";
import ButtonFooter from "../button-footer";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white shadow-md flex justify-around items-center py-3 border-t border-gray-200">
      <ButtonFooter title="Home" icon={FaHome} link="/" />
      <ButtonFooter title="Products" icon={FaHeart} link="/products" />
      <ButtonFooter title="Categories" icon={FaThList} link="/categories" />
      <ButtonFooter title="Profile" icon={FaUserAlt} link="/profile" />
    </footer>
  );
}
