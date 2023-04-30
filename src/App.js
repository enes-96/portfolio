import React from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import HeroHeader from "./components/HeroHeader";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App text-white custom:overflow-x-hidden sm:overscroll-auto  ">
      <Cursor />
      <Navbar />
      <HeroHeader />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
