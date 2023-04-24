import React, { useState } from "react";

const NAVBAR_ITEMS = [
  { id: "about", label: "About" },
  { id: "skill", label: "Skill" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [selectedItemId, setSelectedItemId] = useState("");
  const [isMouseEnter, setIsMouseEnter] = useState("");
  const [hoveredItemOffset, setHoveredItemOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleItemClick(itemId) {
    setSelectedItemId(itemId);

    if (itemId === "about") {
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else if (itemId === "skill") {
      const aboutSection = document.getElementById("skill");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
      const hoveredItem = e.target.closest("li");
      if (hoveredItem) {
        const hoveredItemRect = hoveredItem.getBoundingClientRect();
        const centerX = hoveredItemRect.left + hoveredItemRect.width / 2;
        const centerY = hoveredItemRect.top + hoveredItemRect.height / 2;
        const offsetX = e.clientX - centerX + 10;
        const offsetY = e.clientY - centerY + 10;
        setHoveredItemOffset({ x: offsetX, y: offsetY });
      }
    }
  }

  function handleItemHoverEnter() {
    setIsHovered(true);
  }

  function handleItemHoverLeave() {
    setIsHovered(false);
  }

  return (
    <header
      className=" z-40 text-xl flex items-center justify-between  mb-12 sticky top-4  w-3/4 m-auto"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-4xl font-bold ">EE.</h2>
      <ul className=" px-2 py-2 flex rounded-3xl items-center justify-between bg-zinc-900 text-zinc-500 cursor-default overflow-hidden">
        {NAVBAR_ITEMS.map((item) => {
          const isSelected = selectedItemId === item.id;
          const isMouseOver = isMouseEnter === item.id;
          const isHoveredItem = isMouseOver && isHovered;

          const transitionDelay = isHoveredItem ? 0 : 200;
          const transitionDuration = isHoveredItem ? "0.4s" : "0.2s";

          const styles = {
            transform: `translate(${
              isHoveredItem ? hoveredItemOffset.x : 0
            }px, ${isHoveredItem ? hoveredItemOffset.y : 0}px)`,
            transition: `transform ${transitionDuration} ease ${transitionDelay}ms`,
          };

          return (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              onMouseOver={handleItemHoverEnter}
              onMouseOut={handleItemHoverLeave}
              className={`rounded-full py-4 px-8 relative  ${
                isSelected
                  ? " rounded-3xl bg-zinc-700 text-white transition-all duration-600"
                  : isMouseOver || isHoveredItem
                  ? "text-white transition-all duration-600"
                  : "focus:bg-zinc-800"
              }`}
              style={styles}
            >
              <a href={item.link}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
