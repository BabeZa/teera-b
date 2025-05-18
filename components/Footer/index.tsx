import Link from 'next/link';
import React from 'react'
  
const Footer = () => {   
    return (
        

        <footer className="mt-12 bg-slate-50 shadow dark:bg-black">
            <div className="w-full mx-auto max-w-(--breakpoint-lg) p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 - Teerapat Buakaew</span>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Built using Next.js and tailwindcss, deployed to Vercel.</span>
                
            </div>
        </footer>

    )
}

export default Footer;