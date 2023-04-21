import React from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import HeroHeader from "./components/HeroHeader";
function App() {
  return (
    <div className="App h-screen text-white">
      <Navbar />
      <HeroHeader />
      <Cursor h={5} w={5} />
    </div>
  );
}

export default App;
