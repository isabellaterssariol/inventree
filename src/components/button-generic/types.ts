import { IconType } from "react-icons";

export interface ButtonProps {
  text: string;
  icon: IconType;
  type?: "button" | "submit";
}
