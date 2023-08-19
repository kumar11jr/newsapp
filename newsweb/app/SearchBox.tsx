"use client"
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
const SearchBox = () => {
    const [input, setinput] = useState("")
    const router = useRouter()
    const handlesubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if (!input) {
            return
        }
        router.push(`/search?term=${input}`)
    }
  return (
    <form onSubmit={handlesubmit} className='max-w-6xl mx-auto flex justify-between items-center px-5' >

        <input value={input}
        onChange={(e)=>{setinput(e.target.value)}}
        type='text' className='flex-1 bg-transparent w-full h-14 rounded-sm placeholder:gray-300 text-gray-500 outline-none ' placeholder='Search topic'/>
        <button type='submit' className='text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>Search</button>
    </form>
  )
}

export default SearchBox
