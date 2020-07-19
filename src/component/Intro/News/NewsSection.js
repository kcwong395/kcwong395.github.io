import React from "react"
import NewsItem from "./NewsItem"

import news from "../../../assets/news.json"

function NewsSection() {
    return (
        <div>
            <h3 className="header font-pf">Latest News</h3>
            {news.slice(0, 3).map(item => <NewsItem props={item} />)}
        </div>
    )
}

export default NewsSection