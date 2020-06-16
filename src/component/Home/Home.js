import React from "react"
import "./Home.css"

import Jumbotron from "react-bootstrap/Jumbotron"

function Home(){
    return (
        <Jumbotron className="text-center font-wd overlay" id="section-home">
            <h1>Wong Ka Chung, Martin</h1>
            <h5>Seeing the Unseen</h5>
        </Jumbotron>
    )
}

export default Home