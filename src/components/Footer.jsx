import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1A202C]">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/">
              <h1 className="sm:text-5xl text-3xl font-bold">
                <i>Ab<span className="text-[#4FD1C5]">u</span>ze<span className="text-[#4FD1C5]">r</span></i>
              </h1>
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            I am a frontend developer specializing in building responsive applications using React and Next.js
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link href="#">
                <span className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">About</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Skills</span>
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Projects</span>
              </Link>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <Link href="https://www.facebook.com/imabuzerkhan/" rel="noreferrer" target="_blank">
                <FaFacebook className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" />
                <span className="sr-only">Facebook</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/imabuzerkhan/" rel="noreferrer" target="_blank">
                <FaInstagram className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" />
                <span className="sr-only">Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com/imabuzerkhan41/" rel="noreferrer" target="_blank">
                <FaTwitter className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" />
                <span className="sr-only">Twitter</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.github.com/imabuzerkhan/" rel="noreferrer" target="_blank">
                <FaGithub className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
            <li>
              <Link href="#" rel="noreferrer" target="_blank">
                <FaDribbble className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" />
                <span className="sr-only">Dribbble</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
