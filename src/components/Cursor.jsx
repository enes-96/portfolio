import React, { useRef, useEffect } from "react";

export default function Cursor({ h, w }) {
  const TrailerRef = useRef(null);

  useEffect(() => {
    const trailer = TrailerRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px,${y}px)`,
      };
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
    <div>
      <div
        ref={TrailerRef}
        id="trailer"
        className={`h-${h} w-${w} bg-white rounded-full fixed z-50 pointer-events-none opacity-100`}
      ></div>
    </div>
  );
}
