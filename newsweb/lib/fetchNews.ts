import { gql } from "graphql-request"
import sortByImage from "./sortByImage";

const fetchNews = async (
    category?: Category|string,
    keywords?: string,
    isDynamic?: boolean
) => {
    const query = gql`
    query MyQuery($access_key: String) {
        myQuery(
          access_key: $access_key
          categories: ""
          countries: "gb"
          sort: "published_desc"
          keywords: ""
        ) {
          data {
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
          }
          pagination {
            limit
            count
            offset
            total
          }
        }
      }
    `;
      const res = await fetch('https://lescar.stepzen.net/api/viable-rat/__graphql',{
        method:'POST',
        cache: isDynamic ? "no-cache":"default",
        next:isDynamic?{revalidate:0}:{revalidate:20},
        headers:{
            "Content-Type":"application/json",
            "Authorization":`apiKey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables:{
                access_key:process.env.MEDIASTACK_API_KEY,
                
            }
        })
      })
    //   console.log(category)
      console.log("Loading New Data from Api for categories->",category,keywords)
      const newsResponse = await res.json()
      
      const news = sortByImage(newsResponse.data.myQuery)
      
      return news
      

};


export default fetchNews
