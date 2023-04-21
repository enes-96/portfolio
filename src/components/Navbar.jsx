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
  const [hoveredItemOffsetX, setHoveredItemOffsetX] = useState(0);
  const [hoveredItemOffsetY, setHoveredItemOffsetY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleItemClick(itemId) {
    setSelectedItemId(itemId);
  }

  function handleMouseEnter(item) {
    setIsMouseEnter(item);
  }

  function handleMouseLeave() {
    setIsMouseEnter("");
    setIsHovered(false);
  }

  function handleMouseMove(e) {
    if (isHovered) {
      const posX = e.clientX / 20;
      const posY = e.clientY / 20;
      setHoveredItemOffsetX(posX);
      setHoveredItemOffsetY(posY);
    }
  }

  function handleItemHoverEnter() {
    setIsHovered(true);
  }

  function handleItemHoverLeave() {
    setIsHovered(false);
  }

  return (
    <header className="text-3xl w-3/4 m-auto" onMouseMove={handleMouseMove}>
      <ul className="px-2 py-2 flex w-3/4 rounded-full items-center justify-between bg-zinc-900 text-zinc-500 mx-auto cursor-default">
        {NAVBAR_ITEMS.map((item) => {
          const isSelected = selectedItemId === item.id;
          const isMouseOver = isMouseEnter === item.id;
          const isHoveredItem = isMouseOver && isHovered;

          const transitionDelay = isHoveredItem ? 0 : 1000;
          const transitionDuration = isHoveredItem ? "0.3s" : "1s";

          const styles = {
            transform: `translate(${
              isHoveredItem ? hoveredItemOffsetX : 0
            }px, ${isHoveredItem ? hoveredItemOffsetY : 0}px)`,
            transition: `transform ${transitionDuration} ease-in-out ${transitionDelay}ms`,
          };

          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              onMouseOver={handleItemHoverEnter}
              onMouseOut={handleItemHoverLeave}
              className={`rounded-full py-4 px-8 relative ${
                isSelected
                  ? "bg-zinc-700 text-white transition-all duration-600"
                  : isMouseOver || isHoveredItem
                  ? "text-white transition-all duration-600"
                  : "focus:bg-zinc-800"
              }`}
              style={styles}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
