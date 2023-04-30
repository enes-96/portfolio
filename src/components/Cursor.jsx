import React, { useRef, useEffect } from "react";

export default function Cursor() {
  const TrailerRef = useRef(null);

  useEffect(() => {
    const trailer = TrailerRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px,${y}px)`,
      };
      const target = e.target;
      if (target.tagName === "A" || target.getAttribute("onclick")) {
        trailer.style.backgroundColor = "transparent";
        trailer.style.border = "2px solid white";
      } else {
        trailer.style.backgroundColor = "white";
      }
      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="transition-all duration-1000">
      <div
        ref={TrailerRef}
        id="trailer"
        className={`h-4 w-4 z-50 bg-white rounded-full pointer-events-none opacity-100 fixed `}
      ></div>
    </div>
  );
}
