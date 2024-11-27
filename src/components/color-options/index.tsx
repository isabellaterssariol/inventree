import { useState } from "react";

export default function ColorOptions () {
  const colors = ["#fce4ec", "#f5f5f5", "#d0f8ce", "#bbdefb", "#000000"];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="mt-4">
      <h2 className="text-sm font-medium text-secondary-dark mb-2">
        Color options
      </h2>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color
                ? "border-primary-dark"
                : "border-secondary-light"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};