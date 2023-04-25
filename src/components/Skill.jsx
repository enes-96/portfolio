import React from "react";
import { FaReact, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiWebpack, SiJest } from "react-icons/si";
import {
  VscChromeClose,
  VscTerminal,
  VscTrash,
  VscEllipsis,
  VscAdd,
} from "react-icons/vsc";

function Skill() {
  return (
    <section id="skill" className=" w-3/4  m-auto h-screen">
      <h2 className=" text-8xl mb-4">Skill</h2>
      <div id="terminal" className=" bg-gray-800 rounded-3xl p-8 ">
        <div id="dots" className=" flex items-center gap-2 mb-6">
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
        <div
          id="tabs"
          className="flex items-center h-10 w-full bg-gray-700 rounded-md "
        >
          <div className="h-full bg-gray-600 p-2 flex items-center gap-2 rounded-l-md">
            <FaJsSquare className="text-yellow-400 text-md" />
            <p>script.js</p>
          </div>
          <div className="h-full bg-gray-800 flex items-center gap-3 p-2">
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-400 text-md" />
              <p>Skill.jsx</p>
            </div>
            <VscChromeClose />
          </div>
          <div className="h-full bg-gray-600 p-2 flex items-center gap-2">
            <FaHtml5 className="text-orange-400 text-md" />
            <p>index.html</p>
          </div>
          <div className="h-full bg-gray-600 p-2 flex items-center gap-2">
            <FaCss3 className="text-blue-400 text-md" />
            <p>main.css</p>
          </div>
          <div className="h-full bg-gray-600 p-2 flex items-center gap-2">
            <SiWebpack className=" text-sky-400 text-md" />
            <p>webpack-config.js</p>
          </div>
          <div className="h-full bg-gray-600 p-2 flex items-center gap-2">
            <SiJest className=" text-amber-400 text-md" />
            <p>jest-config.js</p>
          </div>
        </div>
        <ul id="code" className="pt-2">
          <li className="mb-4">
            <span className="text-red-500">Import</span> Skill
            <span className="text-red-500"> from</span>
            <span className="text-blue-400"> "./enes/skillset"</span>;
          </li>
          <div className="flex justify-center gap-4 " id="terminal-wrapper">
            <div className="" id="left-terminal">
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  HTML & CSS <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p> to structure a web
                  page and its <br /> content,and styling the the website"
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  Javascript <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p>"scripting or
                  programming language that allows <br /> to implement complex
                  features on web pages"
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  React <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p>"javascript framwork
                  for building interactive user <br /> interfaces and web
                  applications quickly and efficiently <br /> with less required
                  code than vanilla javascript <br />
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  Tailwind <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8   flex gap-2">
                  <p className="text-red-400">return </p>"css framewrok for
                  rapidly building interfaces, <br />
                  it makes the styling consisten and much easier."
                  <br />
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
            </div>
            <div className="" id="right-terminal">
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  GIT & GITHUB <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p> "git is a version
                  control system used for tracking <br /> changes in computer
                  files, github is a code hosting <br /> platform for version
                  control and collaboration.
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  Webpack <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p>"a static module
                  bundler for javaScript <br /> applications — it takes all the
                  code from your <br /> application and makes it usable in a web
                  browser"
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  Jest <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8 flex gap-2">
                  <p className="text-red-400">return </p>"JavaScript Testing
                  Framework with a focus on simplicity, <br /> it allows to
                  write tests with an approachable, familiar <br /> and
                  feature-rich API that gives you results quickly. "
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
              <li className="mb-4">
                <p className=" text-blue-400 ">
                  Linux <span className="text-orange-400">{"{"}</span>
                </p>
                <p className="pl-8   flex gap-2">
                  <p className="text-red-400">return </p>"Linux® is an open
                  source operating system (OS). An <br /> operating system is
                  the software that directly manages <br /> a system's hardware
                  and resources"
                  <br />
                </p>
                <p>
                  <span className="text-orange-400">{"}"}</span>;
                </p>
              </li>
            </div>{" "}
          </div>
        </ul>
        <div
          id="terminal-console"
          className="w-full h-32 bg-gray-700 rounded-md"
        >
          <div
            id="terminal-concole-nav"
            className="flex items-center justify-between text-sm gap-2 p-2"
          >
            <div className="flex">
              <p className="px-2">PROBLEMS</p>
              <p className="px-2">OUTPUT</p>
              <p className="px-2">DEBUG CONSOLE</p>
              <p className="px-2">TERMINAL</p>
            </div>
            <div className="flex items-center gap-1">
              <VscTerminal className="text-md" />
              <p>npm</p>
              <VscAdd className="text-md" />
              <VscTrash className="text-md" />
              <VscEllipsis className="text-md" />
              <VscChromeClose className="text-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skill;
