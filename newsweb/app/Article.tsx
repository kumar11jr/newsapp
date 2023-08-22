import React from 'react'
import ReadMore from './ReadMore'
import LiveTime from './LiveTime'

type Props = {
    article:Article
}

const Article = ({article}:Props) => {
  return (
    <article className='bg-black-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-black-200 transition-all duration-200 ease-out '>
      {article.image && (
        <img src={article.image} alt={article.title}
        className='h-56 w-full object-cover rounded-t-lg shadow-md'
        />
      )}
      <div className='flex-1 flex flex-col' >
        <div className='flex-1 flex flex-col p-5' >
        <h2 className='font-bold font-serif line-clamp-3' >{article.title}</h2>
        <section className=' mt-2 flex-1 ' >
            <p className='text-xs line-clamp-3' >{article.description}</p>
        </section>
        <footer>
            <p>Source - {article.source}</p>
            <p><LiveTime time={article.published_at}/> </p>
        </footer>
      </div>
      <ReadMore article ={article} />
      </div>
    </article>
  )
}

export default Article
