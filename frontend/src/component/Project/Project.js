import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import PageHeader from "../PageHeader.js"
import ProjectItem from "./ProjectItem.js"
import { getProjects } from "../../apis/apis.js"

import { useState } from 'react'

function Project() {

    const [projectItems, setProjectItems] = useState([])
    fetch("http://localhost:8080/projects")
    .then(res => res.json())
    .then((result) => {
        setProjectItems(result)
    },
    (err) => {
        console.log(err)
    })

    return (
        <Jumbotron id="section-project" style={{ backgroundColor: "#FFFB94" }}>
            <Container>
                <PageHeader
                    header="Latest Projects"
                    subHeader="Mom! It's not working!"
                />
                <Row>
                    {projectItems.slice(0, 6).map(projectItem => <ProjectItem info={projectItem} />)}
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Project