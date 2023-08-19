import Link from 'next/link';
import React from 'react'

type Props={
    category:string;
    isactive:boolean;
}

const NavLink = ({category,isactive}:Props) => {
  return (
    <Link href={`/news/${category}`}
    className={`navLink ${isactive && "underline decoration-orange-400 underline-offset-4 font-bold text-lg"}`}
    >
        {category}
    </Link>
  )
}

export default NavLink
