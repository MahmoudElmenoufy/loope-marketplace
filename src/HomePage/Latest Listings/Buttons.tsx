import { useState } from "react";

const Buttons = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const categories = [
    { id: "electronics", label: "Electronics" },
    { id: "fashion", label: "Fashion" },
    { id: "home-appliances", label: "Home Appliances" },
    { id: "books", label: "Books" },
    { id: "toys", label: "Toys" },
    { id: "beauty-product", label: "Beauty Product" },
    { id: "sports-equipment", label: "Sports equipment" },
    { id: "groceries", label: "Groceries" },
    { id: "furniture", label: "Furniture" },
    { id: "pet-supplies", label: "Pet Supplies" },
    { id: "automotive", label: "Automotive" },
    { id: "health", label: "Health" },
    { id: "jewelry", label: "Jewelry" },
    { id: "office-supplies", label: "Office Supplies" },
    { id: "music-instruments", label: "Music instruments" },
  ];

  return (
    <div className="flex gap-3 py-2 overflow-auto">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.label)}
          className={`
            px-2 py-1 rounded-full text-md font-medium
            transition-colors duration-200 min-w-fit
            ${
              selectedCategory === category.label
                ? "bg-[#18403C] text-[#F3F637]"
                : "bg-white text-{#18403C} border border-[#18403C] hover:bg-gray-50"
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
