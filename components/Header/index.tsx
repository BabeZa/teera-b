import Link from 'next/link';
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {   
    return (
        <header className="w-full transition-all duration-200 fixed top-0 bg-slate-100 dark:bg-black backdrop-blur-lg h-(--header-height) py-4 flex justify-center z-20">
            <div className='w-full max-w-(--breakpoint-lg) h-full flex items-center justify-between mx-8'>
                <div>
                <Link href={'/'} className="text-3xl text-black font-poppins font-bold hover:text-purple-500  transition-all duration-300 dark:text-white dark:hover:text-purple-500">B:/</Link>
                </div>
                <div className='hidden lg:flex items-center space-x-8 bg-red'>
                    {/* <ThemeToggle /> */}
                    <a href="#home" className="text-black font-semibold hover:text-purple-500 dark:text-white">Home</a>
                    {/* <a href="#about" className="text-black font-semibold hover:text-purple-500 dark:text-white">About</a> */}
                    <a href="#skills" className="text-black font-semibold hover:text-purple-500 dark:text-white">Skills</a>
                    <a href="#experience" className="text-black font-semibold hover:text-purple-500 dark:text-white">Experience</a>
                    {/* <a href="#projects" className="text-black font-semibold hover:text-purple-500 dark:text-white">Projects</a> */}
                    <a href="#contact" className="text-black font-semibold hover:text-purple-500 dark:text-white">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header;