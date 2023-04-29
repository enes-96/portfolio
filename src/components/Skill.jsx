import React from "react";
import { FaReact, FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiWebpack, SiJest, SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import {
  VscChromeClose,
  VscTerminal,
  VscTrash,
  VscEllipsis,
  VscAdd,
} from "react-icons/vsc";

function Skill() {
  return (
    <section id="skill" className=" w-3/4  m-auto  bg-black ">
      <h2 className=" 2xl:text-8xl xl:text-7xl md:text-6xl sm:text-5xl custom:text-4xl mb-8 transition-all duration-1000">
        Skill
      </h2>
      <div
        id="terminal"
        className=" border-2 border-gray-800  rounded-3xl relative"
      >
        <div className=" custom:flex grid grid-cols-3 items-center rounded-t-2xl pr-2">
          <div id="dots" className=" flex items-center gap-2 m-7 ">
            <div
              className=" h-5 w-5  bg-red-500 rounded-full"
              id="dot-red"
            ></div>
            <div
              className=" h-5 w-5 bg-yellow-500 rounded-full"
              id="dot-yellow"
            ></div>
            <div
              className=" h-5 w-5 bg-green-500 rounded-full"
              id="dot-green"
            ></div>
          </div>
          <p className="2xl:text-lg xl:text-md sm:text-sm custom:text-xs custom:col-span-2 text-left 2xl:col-span-2 sm:col-span-2  ">
            Skill.jsx - portfolio - Visual Studio Code
          </p>
        </div>
        <div className=" w-full h-6 bg-zinc-900  flex gap-4 sm:text-xs   md:text-sm items-center px-4 py-3 overflow-scroll">
          <p>File</p>
          <p>Edit</p>
          <p>Selection</p>
          <p>View</p>
          <p>Go</p>
          <p>Run</p>
          <p>Terminal</p>
          <p>Help</p>
        </div>
        <div
          id="tabs"
          className="flex items-center h-12  bg-slate-800 overflow-scroll  xl:text-base md:text-md sm:text-sm "
        >
          <div className="h-full  bg-slate-900 p-4 flex items-center gap-2 rounded-l-md">
            <FaJsSquare className="text-yellow-400 text-md" />
            <p className="">script.js</p>
          </div>
          <div className="h-full bg-gray-800 flex items-center gap-3 p-4">
            <div className="flex items-center gap-2">
              <FaReact className="text-blue-400 text-md" />
              <p>Skill.jsx</p>
            </div>
            <VscChromeClose />
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <FaHtml5 className="text-orange-400 text-md" />
            <p>index.html</p>
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <FaCss3 className="text-blue-400 text-md" />
            <p>main.css</p>
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <SiWebpack className=" text-sky-400 text-md " />
            <p className=" whitespace-nowrap ">webpack-config.js</p>
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <SiJest className=" text-amber-400 text-md" />
            <p className=" whitespace-nowrap">jest-config.js</p>
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <SiTailwindcss className=" text-cyan-400 text-md" />
            <p className=" whitespace-nowrap">tailwind-config.js</p>
          </div>
          <div className="h-full bg-slate-900 p-4 flex items-center gap-2">
            <FaGitAlt className=" text-orange-400 text-md" />
            <p>.gitignore</p>
          </div>
        </div>
        <ul id="code" className="pt-4 p-8 ">
          <div
            className="xl:flex md:block  justify-left sm:text-sm"
            id="terminal-wrapper"
          >
            <div className="xl:w-1/2 md:w-full" id="left-terminal">
              <li className="mb-4 ">
                <span className="text-red-500">Import</span> Skill
                <span className="text-red-500"> from</span>
                <span className="text-blue-400"> "./enes/skillset"</span>;
              </li>
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
            <div
              className="xl:border-l-2 xl:pl-8 md:bordel md:pl-0 border-gray-800 xl:w-1/2 md:w-full"
              id="right-terminal"
            >
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
          className="w-full bg-slate-900 rounded-b-3xl p-2  xl:text-base sm:text-sm overflow-scroll"
        >
          <div
            id="terminal-concole-nav"
            className="flex items-center justify-between text-sm gap-2 p-2 "
          >
            <div className="flex">
              <p className="px-2">PROBLEMS</p>
              <p className="px-2">OUTPUT</p>
              <p className="px-2">DEBUG CONSOLE</p>
              <p className="px-2 border-b-2 border-gray-400">TERMINAL</p>
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
          <p className="pl-4 w-96">
            <span className="text-green-400">enes@eren:</span>
            <span className="text-blue-400">~/portfolio</span>$
            <span className="pl-2"> git add .</span>
          </p>
          <p className="pl-4 w-96">
            <span className="text-green-400">enes@eren:</span>
            <span className="text-blue-400">~/portfolio</span>$
            <span className="pl-2 "> git commit -m"creating portfolio"</span>
          </p>
          <p className="pl-4 w-96">
            <p className="w-96 ">[main 345ff234] creating portfolio</p>
            <p className="w-96">
              4 files changed, 125 insertions(+),65 deletions(-)
            </p>
          </p>
          <p className="pl-4 flex">
            <div>
              <span className="text-green-400">enes@eren:</span>
              <span className="text-blue-400">~/portfolio</span>$
            </div>
            <div className="flex items-center ">
              <span className="pl-4  w-96"> git push origin main</span>
              <span className=" w-1  h-4 ml-1 bg-white"></span>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Skill;
