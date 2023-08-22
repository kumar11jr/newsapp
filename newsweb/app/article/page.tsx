import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams?:Article
}

const page = ({ searchParams }:Props) => {
  if((searchParams && Object.entries(searchParams).length===0) || !searchParams){
    return notFound();
  }
  const article:Article = searchParams
    return (
    <article>
      <section className='flex flex-col lg:flex-row pb-24 px-0 lg:px-10 ' >
        {article.image && (
            <img className='h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover
            rounded-xl shadow-md' src={article.image} />
        )}
        <div className="px-10">
            <h1 className="headerTitle px-10 no-underline pb-2">
                {article.title}
            </h1>

            <div>
                <h2 className="font-bold">By: {article.author}</h2>
                <h2 className="font-bold pl-4">Source: {article.source}</h2>
                <p className='pt-4' >{article.description}</p> 
            </div>


        </div>
      </section>
    </article>
  )
}

export default page
