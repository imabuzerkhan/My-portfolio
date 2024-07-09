import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  return (
    <div className='bg-[#1A202C] mt-10 px-8 lg:px-40'>
      <h1 className='text-3xl md:text-5xl font-extrabold mb-4'>Project  <span className="text-[#4FD1C5] capitalize " >section</span> </h1>
      <div className="project grid grid-cols-1 sm:grid-cols-2 gap-10">
        
        <div className="card bg-[#2f3747] mt-10 w-full rounded-lg">
          <Image 
            className='rounded-tr-md rounded-tl-md w-full h-auto'
            src='/Project-sec/Pariwar.png'
            alt='pariwar-website'
            width={600}
            height={200}
            layout='responsive'
          />
          <div className="text px-2 py-2">
            <h1 className='text-2xl font-mono'>Pariwar Website</h1>
            <p className='my-2 font-medium text-gray-300'>This mental health project, developed with Next.js, offers a responsive and seamless user experience across all devices.</p>
            <Link href='https://pariwar.vercel.app/' target='_blank'>
              <button className='bg-[#4FD1C5] my-3 px-3 py-2 text-gray-950 font-bold rounded-lg'>Visit Website</button>
            </Link>
          </div>
        </div>

        <div className="card bg-[#2f3747] mt-10 w-full rounded-lg">
          <Image 
            className='rounded-tr-md rounded-tl-md w-full h-auto'
            src='/Project-sec/Doctor-appoinment.png'
            alt='doctor-website'
            width={600}
            height={200}
            layout='responsive'
          />
          <div className="text px-2 py-2">
            <h1 className='text-2xl font-mono'>Doctor Website</h1>
            <p className='my-2 font-medium text-gray-300'>This is a hospital project, developed with Next.js, offers a responsive and seamless user experience across all devices.</p>
            <Link href='https://doctor-appoinment-app-henna.vercel.app/' target='_blank'>
              <button className='bg-[#4FD1C5] my-3 px-3 py-2 text-gray-950 font-bold rounded-lg'>Visit Website</button>
            </Link>
          </div>
        </div>

        <div className="card bg-[#2f3747] mt-10 w-full rounded-lg">
          <Image 
            className='rounded-tr-md rounded-tl-md w-full h-auto'
            src='/Project-sec/modern-ui-ux.png'
            alt='modern-ui-ux'
            width={600}
            height={200}
            layout='responsive'
          />
          <div className="text px-2 py-2">
            <h1 className='text-2xl font-mono'>Modern Ui/Ux</h1>
            <p className='my-2 font-medium text-gray-300'>This project is based on modern Ui, developed with Next.js, offers a responsive and seamless user experience across all devices.</p>
            <Link href='https://modern-ui-project-three.vercel.app/' target='_blank'>
              <button className='bg-[#4FD1C5] my-3 px-3 py-2 text-gray-950 font-bold rounded-lg'>Visit Website</button>
            </Link>
          </div>
        </div>

        <div className="card bg-[#2f3747] mt-10 w-full rounded-lg">
          <Image 
            className='rounded-tr-md rounded-tl-md w-full h-auto'
            src='/Project-sec/Resturant Website.png'
            alt='restaurant-website'
            width={600}
            height={200}
            layout='responsive'
          />
          <div className="text px-2 py-2">
            <h1 className='text-2xl font-mono'>Restaurant Website</h1>
            <p className='my-2 font-medium text-gray-300'>It is a restaurant, developed with HTML, CSS, and JavaScript, offering a responsive and seamless user experience across all devices.</p>
            <Link href='https://cosmic-mermaid-5bf6af.netlify.app' target='_blank'>
              <button className='bg-[#4FD1C5] my-3 px-3 py-2 text-gray-950 font-bold rounded-lg'>Visit Website</button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project
