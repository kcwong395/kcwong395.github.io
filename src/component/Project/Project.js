import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import PageHeader from "../PageHeader.js"
import ProjectItem from "./ProjectItem.js"

import project from "../../assets/project.json"

function Project() {
    return (
        <Jumbotron id="section-contact" style={{ backgroundColor: "#FFFB94" }}>
            <Container>
                <PageHeader
                    header="Latest Projects"
                    subHeader="Mom! It's not working!"
                />
                <Row>
                    {project.slice(0, 6).map(projectItem => <ProjectItem info={projectItem} />)}
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Project