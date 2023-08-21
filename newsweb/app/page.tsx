import { categories } from '@/constant'
import fetchNews from '@/lib/fetchNews'
import React from 'react'


async function HomePage(){
  const news:NewsResponse = await fetchNews(categories.join(','))
  return <div>
    
  </div>
}


export default HomePage