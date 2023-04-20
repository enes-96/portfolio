import React from "react";

export default function Navbar() {
  return (
    <header className="text-3xl ">
      <ul className="flex w-3/4 rounded-full py-6 px-12  justify-between bg-zinc-900 fixed top-8 mx-auto">
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
        <li>Skill</li>
      </ul>
    </header>
  );
}
