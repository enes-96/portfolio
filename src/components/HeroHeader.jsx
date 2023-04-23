import React, { useState } from "react";
import catImage from "./images/cat.jpg";

function HeroHeader() {
  const [isHovered, setIsHovered] = useState(false);

  function handleImgMouseOver() {
    setIsHovered(true);
  }

  function handleImgMouseOut() {
    setIsHovered(false);
  }

  return (
    <div>
      <h2 className="text-3xl text-center overflow-hidden my-0 mx-auto whitespace-nowrap border-r-4 border-r-white mb-4">
        Front End Developer
      </h2>
      <h1 className="  text-8xl mb-2 text-center font-medium">ENES EREN</h1>
      <h3 className="text-center mb-6 text-xl text-zinc-500">
        Based in Vienna
      </h3>
      <div className="grid place-items-center mb-8">
        <div
          id="img-potrait"
          className={`transition-all duration-1000  rounded-t-full border-8 border-zinc-500 grid place-items-center overflow-hidden ${
            isHovered ? "border-white rounded-b-full rounded-t-none" : ""
          }`}
          onMouseOver={handleImgMouseOver}
          onMouseOut={handleImgMouseOut}
        >
          <img src={catImage} alt="cat" className="rounded-t-full" />
        </div>
      </div>
      <div>
        <h5 className="text-4xl  w-3/4 m-auto mb-8 leading-relaxed">
          Winner of the world's most prestigious web design awards in the fields
          of UI, UX, and innovation. With a diverse background in art direction,
          design leadership, website and app UI/UX design, 3D design, and
          branding, I bring a well-rounded skill set to every project I take
          on.View CV
        </h5>
      </div>
    </div>
  );
}

export default HeroHeader;
