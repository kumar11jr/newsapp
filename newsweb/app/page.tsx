import { categories } from '@/constant'
import fetchNews from '@/lib/fetchNews'
import React from 'react'
import NewsList from './NewsList'
import { resolve } from 'path'


async function HomePage(){
  const news:NewsResponse = await fetchNews('general')
  // await new Promise((resolve)=>setTimeout(resolve,10000))             
  console.log(news)
  return <div>
    <NewsList news={news} />
  </div>
}


export default HomePage