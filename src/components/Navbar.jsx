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

  function handleItemClick(itemId) {
    setSelectedItemId(itemId);
    console.log(itemId);
  }

  return (
    <header className="text-2xl w-2/4 m-auto">
      <ul className="px-2 py-2 flex w-2/4 rounded-full items-center justify-between bg-zinc-900 text-zinc-500 fixed top-8 mx-auto">
        {NAVBAR_ITEMS.map((item) => (
          <li
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`rounded-full py-4 px-10 ${
              selectedItemId === item.id
                ? "bg-zinc-700 text-white"
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
