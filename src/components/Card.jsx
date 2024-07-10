import React from 'react'

import { FaHtml5 , FaCss3Alt , FaReact , FaPython , FaJava  , FaGitSquare    } from "react-icons/fa";
import { RiJavascriptFill , RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
const Card = () => {
  return (
   <>
   <div className="main-card">
    <div className="card">
      <div><FaHtml5 /></div>
      <span>Html</span>
    </div>
    <div className="card">
      <div><FaCss3Alt /> </div>
      <span>Css</span>
    </div>
    <div className="card">
      <div><RiJavascriptFill /> </div>
      <span>Javascript</span>

    </div>
    <div className="card">
      <div><FaReact /> </div>
      <span>React</span>
      
    </div>
    <div className="card">
      <div><TbBrandNextjs /> </div>
      <span>Next.js</span>
      
    </div>
    <div className="card">
      <div><RiTailwindCssFill /> </div>
      <span>Tailwind Css</span>
      
    </div>
    <div className="card">
      <div><FaPython /> </div>
      <span>Python</span>
      
    </div>
    <div className="card">
      <div><FaJava /> </div>
      <span>Java</span>
      
    </div>
    <div className="card">
      <div><FaGitSquare /> </div>
      <span>Git</span>
      
    </div>
   </div>
   </>
  )
}

export default Card
