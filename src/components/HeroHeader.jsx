import React from "react";
import catImage from "./images/cat.jpg";

function HeroHeader() {
  return (
    <div>
      <h2 className="text-4xl text-center overflow-hidden my-0 mx-auto whitespace-nowrap border-r-4 border-r-white typewriter">
        Front End Developer
      </h2>
      <div className="grid place-items-center">
        <h1 className="bg-white text-black rounded-xl py-4 text-7xl px-20">
          ENES
        </h1>
      </div>
      <div className="grid place-items-center">
        <div
          id="img-potrait"
          className=" rounded-t-full border-8 border-blue-500 grid place-items-center overflow-hidden"
        >
          <img src={catImage} alt="cat" className="rounded-t-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
