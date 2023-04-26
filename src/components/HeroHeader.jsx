import React, { useState, useEffect } from "react";

function HeroHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <section id="about" className="">
      <h2 className="text-3xl text-center overflow-hidden my-0 mx-auto whitespace-nowrap border-r-2 border-r-white mb-4">
        Front End Developer
      </h2>
      <h1 className="  text-8xl mb-2 text-center font-medium">ENES EREN</h1>
      <h3 className="text-center mb-6 text-xl text-zinc-500">
        Based in Vienna
      </h3>
      <div className="grid place-items-center mb-10 ">
        <div
          id="img-potrait"
          className={`bg-green-500  transition-all duration-500   rounded-t-full border-zinc-500 grid place-items-center  ${
            scrolled ? "bg-purple-500" : ""
          }`}
        ></div>
      </div>
      <div>
        <h5 className="text-4xl  w-3/4 m-auto mb-10 leading-relaxed">
          At 19 years old, I'm a self-taught front-end developer with a passion
          for Web Development. I approach every project with a desire to learn
          and grow, and I'm always exploring new technologies to enhance my
          skills.
        </h5>
      </div>
    </section>
  );
}

export default HeroHeader;
