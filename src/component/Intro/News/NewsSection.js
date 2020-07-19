import React from "react"
import NewsItem from "./NewsItem"

import news from "../../../assets/news.json"

function NewsSection() {

    return (
        news.length > 0 &&
        <div>
            <h3 className="header font-pf">Latest News</h3>
            {news.slice(0, 3).map(item => <NewsItem content={item.content} />)}
        </div>
    )
}

export default NewsSection