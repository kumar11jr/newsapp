"use client"
import React from 'react'
import { categories } from '@/constant'
import { usePathname } from "next/navigation"
import NavLink from './NavLink'
const NavLinks = () => {
    const pathname = usePathname()

    const isactive = (path:string)=>{
        return pathname?.split("/").pop() === path
    }
  return (
    <nav  className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto '>
        {categories.map((category)=>(
            <NavLink key={category} category={category} isactive={isactive(category)}/>
        ))}
      
    </nav>
  )
}

export default NavLinks
