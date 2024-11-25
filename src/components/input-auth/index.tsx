import React from "react";

interface InputAuthProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

export default function InputAuth({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
  error,
  className,
}: InputAuthProps) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
    <label htmlFor={name} className="text-secondary mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="p-3 border-2 border-primary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
    />
    {error && <span className="text-secondary text-sm mt-1">{error}</span>}
  </div>
  );
}
