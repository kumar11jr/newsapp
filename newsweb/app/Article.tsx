import React from 'react'

type Props = {
    article:Article
}

const Article = ({article}:Props) => {
  return (
    <article>
      {article.image && (
        <img src={article.image} alt={article.title}
        className='h-56 w-full object-cover rounded-t-lg shadow-md'
        />
      )}
    </article>
  )
}

export default Article
