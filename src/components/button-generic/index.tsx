import { ButtonProps } from "./types";

export default function Button({ text, icon: Icon, type }: ButtonProps) {
  return (
    <div className="flex justify-center items-center cursor-pointer p-4 pl-0">
      <button
        type={type}
        className="w-36 h-12 bg-white border-2 border-primary-light text-secondary-dark font-bold text-sm rounded-lg flex items-center justify-center p-3 transition-all duration-200 hover:bg-primary-light active:bg-primary-dark focus:outline-none"
      >
        <Icon className="w-4 h-4 mr-2 text-secondary-dark" />
        {text}
      </button>
    </div>
  );
}
