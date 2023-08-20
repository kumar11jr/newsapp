import { categories } from '@/constant'
import React from 'react'


async function HomePage(){
  const news:NewsResponse = await fetchNews(categories.join(','))
  return <div>
    
  </div>
}


export default HomePage