import { categories } from '@/constant'
import fetchNews from '@/lib/fetchNews'
import React from 'react'
import NewsList from './NewsList'


async function HomePage(){
  const news:NewsResponse = await fetchNews(categories.join(','))
  console.log(news)
  return <div>
    <NewsList news={news} />
  </div>
}


export default HomePage