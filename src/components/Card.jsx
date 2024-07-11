import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaJava, FaGitSquare } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const Card = () => {
  return (
    <>
      <div className="main-card grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 items-center justify-center my-10">
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaHtml5 /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Html</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaCss3Alt /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Css</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><RiJavascriptFill /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Javascript</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaReact /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">React</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><TbBrandNextjs /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Next.js</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><RiTailwindCssFill /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Tailwind</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaPython /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Python</h3>
        </div>

        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><SiDjango /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Django</h3>
        </div>

        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaJava /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Java</h3>
        </div>
        <div className="card bg-[#2f3747] w-32 p-4 rounded-lg flex flex-col items-center">
          <div className="text-5xl text-white"><FaGitSquare /></div>
          <h3 className="mt-3 text-center text-xl font-medium font-mono">Git</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
