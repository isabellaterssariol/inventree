import { ButtonProps } from "./types";

export default function ButtonAuth({
  children,
  loading,
  type,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full py-3 text-white rounded-lg hover:bg-primary-dark transition duration-300 bg-primary font-inter ${className}`}
      disabled={loading || disabled}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="border-t-2 border-white border-solid w-6 h-6 rounded-full animate-spin"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
