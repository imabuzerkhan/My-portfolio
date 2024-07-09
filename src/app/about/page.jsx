import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const aboutPage = () => {
  return (
    <div>
      <section className="bg-[#1A202C] ">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Hi, I'm a
              <span className="text-[#4FD1C5]"> Front-End Developer</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">I create responsive, modern web applications using the latest technologies.
              <br className="hidden md:inline lg:hidden" /> Let's build something amazing together.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href="https://github.com/your-github-username" passHref>
                <button className=" w-full block px-8 py-3 text-lg font-semibold rounded bg-[#4FD1C5] text-black" target="_blank" rel="noopener noreferrer">GitHub</button>
              </Link>
              <Link href="https://linkedin.com/in/your-linkedin-username" passHref>
                <button className="w-full block px-8 py-3 text-lg font-semibold  rounded bg-[#2f3747] text-white " target="_blank" rel="noopener noreferrer">LinkedIn</button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
            <Image src="/Business_SVG.svg" alt="business-img" width={500} height={500} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutPage
