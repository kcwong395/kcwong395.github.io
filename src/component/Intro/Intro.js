import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"

import PageHeader from "../PageHeader.js"
import Content from "./Content.js"

function Intro() {
    return (
        <Jumbotron id="section-about" style={{backgroundColor: "#C1E1DC"}}>
            <Container>
                <PageHeader 
                    header="About ME" 
                    subHeader="Still, I am eager to learn" 
                />
                <Content />
            </Container>
        </Jumbotron>
    )
}

export default Intro