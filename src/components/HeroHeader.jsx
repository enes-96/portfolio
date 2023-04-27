import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const TITLES = [
  "Front End Developer",
  "Javascript Developer",
  "Website Designer",
];

const HeroHeader = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((titleIndex) => (titleIndex + 1) % TITLES.length);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 200);
  };

  const bgImage = scrolled
    ? "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80"
    : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

  return (
    <section id="about">
      <h2 className="text-3xl mb-4 font-medium w-full text-center">
        <Typewriter
          options={{
            strings: [TITLES[titleIndex]],
            autoStart: true,
            delay: 50,
            onTypingDone: () => {},
          }}
        />
      </h2>
      <h1 className="text-8xl text-center">ENES EREN</h1>
      <h3 className="text-center mb-6 text-xl text-zinc-500">
        Based in Vienna
      </h3>
      <div className="grid place-items-center mb-10 ">
        <div
          id="img-potrait"
          className={`overflow-hidden  rounded-t-full relative`}
        >
          <img
            src={bgImage}
            alt=""
            className={`transition-all duration-500 absolute ${
              scrolled ? " opacity-0 " : ""
            }`}
          />
          <img
            src={bgImage}
            alt=""
            className={`transition-all duration-500  absolute ${
              scrolled ? "" : "opacity-0 "
            }`}
          />
        </div>
      </div>
      <div>
        <h5 className="text-4xl w-3/4 m-auto mb-10 leading-relaxed">
          At 19 years old, I'm a self-taught front-end developer with a passion
          for Web Development. I approach every project with a desire to learn
          and grow, and I'm always exploring new technologies to enhance my
          skills.
        </h5>
      </div>
    </section>
  );
};

export default HeroHeader;
