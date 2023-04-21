import React, { useState } from "react";
const NAVBAR_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
  { id: "skill", label: "Skill" },
];

export default function Navbar() {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [isMouseEnter, setIsMouseEnter] = useState("");

  function handleItemClick(itemId) {
    setSelectedItemId(itemId);
  }

  function handleMouseEnter(item) {
    setIsMouseEnter(item);
  }
  function handleMouseLeave() {
    setIsMouseEnter("");
  }

  return (
    <header className="text-3xl w-3/4 m-auto ">
      <ul className="px-2 py-2 flex w-3/4 rounded-full items-center justify-between bg-zinc-900 text-zinc-500 mx-auto cursor-default">
        {NAVBAR_ITEMS.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
            className={`rounded-full py-4 px-8 relative ${
              selectedItemId === item.id
                ? "bg-zinc-700 text-white transition-all duration-600"
                : isMouseEnter === item.id
                ? "text-white transition-all duration-600"
                : "focus:bg-zinc-800"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </header>
  );
}
