import React from 'react'
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import NavLinks from './NavLinks';

function Header(){
    return <header>
        <div className='grid grid-cols-3 p-10 itmes-center'>
            <Bars3Icon className="h-8 w-8 cursor-pointer"/>
            <Link href="/" prefetch={false}>
                <h1 className='font-serif text-3xl text-center'>The <span className='underline  decoration-orange-500 '>PAPAFAM</span> News</h1>
            </Link>
             <div className='flex items-center justify-end space-x-2'>
                <button className='hidden md:inline bg-white-900 text-slate-900 px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-white'>Suscribe Now</button>
             </div>
        </div>
        <NavLinks/>
        </header>
}


export default Header;