import React, { useState, useEffect } from "react";

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
  const [scrolled, setScrolled] = useState(false);

  function handleItemClick(itemId) {
    const section = document.getElementById(itemId);
    if (section) {
      // Wait for the scroll animation to complete before updating selectedItemId
      setTimeout(() => setSelectedItemId(itemId), 500);
      section.scrollIntoView({ behavior: "smooth" });
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

  function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    NAVBAR_ITEMS.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setSelectedItemId(item.id);
        }
      }
    });

    const isScrolled = scrollPosition > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className=" z-40 text-xl flex items-center justify-between  mb-12 sticky top-4 w-3/4 m-auto"
      onMouseMove={handleMouseMove}
    >
      <div
        id="logo"
        className={`text-4xl font-bold w-20 h-20 flex justify-center items-center rounded-md transition-all duration-300 ${
          scrolled ? "opacity-0" : ""
        }`}
      >
        <h2 className="text-center">
          EE<span className="text-blue-600">.</span>
        </h2>
      </div>
      <ul className=" px-4 py-4 flex rounded-full items-center justify-between bg-zinc-900  text-zinc-500 cursor-default overflow-hidden ">
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
                  ? " rounded-3xl bg-blue-800 text-white "
                  : isMouseOver || isHoveredItem
                  ? "text-white "
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
