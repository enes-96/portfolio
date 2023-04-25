import React from "react";

function Skill() {
  return (
    <section id="skill" className=" w-3/4  m-auto ">
      <h2 className=" text-8xl mb-4">Skill</h2>
      <div id="console" className=" bg-gray-800 rounded-3xl  w-ful h-60 p-8">
        <div className=" flex items-center gap-2 mb-6">
          <div className=" h-5 w-5 bg-red-500 rounded-full" id="dot-red"></div>
          <div
            className=" h-5 w-5 bg-yellow-500 rounded-full"
            id="dot-yellow"
          ></div>
          <div
            className=" h-5 w-5 bg-green-500 rounded-full"
            id="dot-green"
          ></div>
        </div>
        <ul className="">
          <li>
            <span className="text-red-500">Import</span> Skill
            <span className="text-red-500"> from</span>
            <span className="text-blue-400"> "./enes/skillset"</span>;
          </li>
          <li className="flex gap-2">
            <p>-Html & CSS</p>
            <p>for scripting and styling </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Skill;
