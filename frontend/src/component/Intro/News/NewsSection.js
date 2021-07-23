import React, {useState} from "react"
import NewsItem from "./NewsItem"

// import news from "../../../assets/news.json"

function NewsSection() {

    const [newsItems, setNewsItems] = useState([])
    fetch("http://localhost:8080/news")
    .then(res => res.json())
    .then((result) => {
        setNewsItems(result)
    },
    (err) => {
        console.log(err)
    })

    return (
        newsItems.length > 0 &&
        <div>
            <h3 className="header font-pf">Latest News</h3>
            {newsItems.slice(0, 3).map(item => <NewsItem content={item.content} />)}
        </div>
    )
}

export default NewsSection