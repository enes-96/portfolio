import React from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import HeroHeader from "./components/HeroHeader";
function App() {
  return (
    <div className="App h-screen text-white">
      <Cursor />
      <Navbar />
      <HeroHeader />
    </div>
  );
}

export default App;
