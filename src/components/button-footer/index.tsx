import { Link } from "react-router-dom";
import { ButtonFooterProps } from "./types";

export default function ButtonFooter({
  title,
  icon: Icon,
  link,
}: ButtonFooterProps) {
  return (
    <Link
      to={link}
      className="flex flex-col items-center gap-1 text-gray-600 hover:text-primary"
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-medium">{title}</span>
    </Link>
  );
}
