import React from "react";

function Skill() {
  return (
    <section id="skill" className=" w-3/4  m-auto h-screen">
      <h2 className=" text-8xl mb-4">Skill</h2>
      <div id="terminal" className=" bg-gray-800 rounded-3xl p-8 ">
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
          <li className="mb-4">
            <span className="text-red-500">Import</span> Skill
            <span className="text-red-500"> from</span>
            <span className="text-blue-400"> "./enes/skillset"</span>;
          </li>
          <div className="flex" id="terminal-wrapper">
            <div className="" id="left-terminal">
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  HTML & CSS <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p> to structure a web
                  page and its <br /> content,and styling the the website"
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  Javascript <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p>"scripting or
                  programming language that allows <br /> to implement complex
                  features on web pages"
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  React <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p>"javascript framwork
                  for building interactive user <br /> interfaces and web
                  applications quickly and efficiently <br /> with less required
                  code than vanilla javascript <br />
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  Tailwind <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8   flex gap-2">
                  <p className="text-red-600">return </p>"css framewrok for
                  rapidly building interfaces, <br />
                  it makes the styling consisten and much easier."
                  <br />
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
            </div>
            <div className="" id="right-terminal">
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  GIT & GITHUB <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p> to structure a web
                  page and its <br /> content,and styling the the website"
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  Javascript <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p>"scripting or
                  programming language that allows <br /> to implement complex
                  features on web pages"
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  React <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-600">return </p>"javascript framwork
                  for building interactive user <br /> interfaces and web
                  applications quickly and efficiently <br /> with less required
                  code than vanilla javascript <br />
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-700 ">
                  Tailwind <span className="text-orange-700">{"{"}</span>
                </p>
                <p className="pl-8   flex gap-2">
                  <p className="text-red-600">return </p>"css framewrok for
                  rapidly building interfaces, <br />
                  it makes the styling consisten and much easier."
                  <br />
                </p>
                <p>
                  <span className="text-orange-700">{"}"}</span>;
                </p>
              </li>
            </div>{" "}
          </div>
        </ul>
      </div>
    </section>
  );
}
export default Skill;
