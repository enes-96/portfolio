import React from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import HeroHeader from "./components/HeroHeader";
import Skill from "./components/Skill";
function App() {
  return (
    <div className="App  text-white">
      <Cursor />
      <Navbar />
      <HeroHeader />
      <Skill />
    </div>
  );
}

export default App;
