import { InputAuthProps } from "./types";

export default function InputAuth({
  label,
  type,
  name,
  placeholder,
  error,
  className,
  register,
}: InputAuthProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="text-secondary mb-2">
          {label}
        </label>
      )}

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`p-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition duration-300 ${
          error ? "border-red-500" : "border-primary-dark"
        }`}
        {...register(name)}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
