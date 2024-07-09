import React from 'react'
import { skills } from '@/data'
const Skills = () => {
  return (
    <div className='mt-10 px-8 lg:px-40' >
      <h1 className='text-3xl md:text-5xl font-extrabold mb-4' >Skills <span className="text-[#4FD1C5]" >Section</span></h1>
      <ul>
      {
        skills.map((item)=>{
          <li key={item.id} >
<div>{item.icon}</div>
<h2>{item.title}</h2>
          </li>
        })
      }
      </ul>
    </div>
  )
}

export default Skills
