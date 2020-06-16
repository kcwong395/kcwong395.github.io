import React from "react"
import NewsItem from "./NewsItem"

function NewsSection() {
    return (  
        <div>
            <h3 className="header font-pf">Latest News</h3>
            <NewsItem content="Martin will be one of the course tutors in EE2331 - Data Structures and Algorithms in the upcoming semester (Sem B 19/20)" />
        </div>
    )
}

export default NewsSection