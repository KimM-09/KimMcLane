import React from 'react'
import { navLinks } from '../lib/navlinks'
const NavBar = () => {

  return (
      <header className='fixed top-0 left-0 right-0 transition-all durration-500 z-50 py-5'>
        <nav className='container mx-auto px-6 max-w-4xl p-4'>
            <div className='flex justify-between'>
                <a href='#' className='text-violet-600 dark:text-fuchsia-400 font-bold text-4xl'>KM</a>
                <div className='flex gap-4'>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className='bg-violet-600 dark:bg-fuchsia-600 py-2 px-4 rounded-2xl text-xl font-semibold'>{link.label}</a>
                    ))}
                </div>
            </div>
        </nav>
      </header>
  )
}

export default NavBar
