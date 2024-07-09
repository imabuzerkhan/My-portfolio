import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Project = () => {
  return (
    <div className='bg-[#1A202C] px-10 lg:px-40 ' >
      <div className="project grid-cols-1 sm:grid-cols-2 lg:items-center   ">
        <h1 className='text-5xl font-extrabold mb-4
         ' >Project section</h1>
        <div className="card bg-[#2f3747] mt-10 rounded-lg w-[30rem] ">
          <Image 
          className='rounded-tr-md rounded-tl-md '
          src='/Project-sec/Pariwar.png'
          alt='pariwar-website'
          width={600}
          height={200}
          />
          <div className="text px-2 py-2  ">
          <h1 className='text-2xl font-mono ' >Pariwar Website</h1>
          <p className='my-2 font-medium text-gray-300 ' >This mental health project, developed with Next.js, offers a responsive and seamless user experience across all devices</p>
         <Link href='https://pariwar.vercel.app/' target='_blank' >
         <button className='bg-[#4FD1C5] my-3 px-3 py-2 text-gray-950 font-bold rounded-lg ' >Visit Website</button>
         </Link>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Project
