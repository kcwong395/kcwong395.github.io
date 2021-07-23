import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import PageHeader from "../PageHeader.js"
import ContactItem from "./ContactItem.js"


function Contact() {
    return (
        <Jumbotron id="section-contact" style={{ backgroundColor: "#e9ecef" }}>
            <Container>
                <PageHeader
                    header="Looking for Collaboration?"
                    subHeader="Let me know the idea in your mind..."
                />
                <Container className="text-center font-pf">
                    <Row>
                        <ContactItem 
                            link="https://github.com/kcwong395"
                            icon="fa-github"
                            content="Github"
                        />
                        <ContactItem
                            link="mailto:kcwong395@gmail.com"
                            icon="fa-google"
                            content="Email" 
                        />
                        <ContactItem 
                            link="https://www.linkedin.com/in/kcwong395"
                            icon="fa-linkedin"
                            content="Linkedin" 
                        />
                    </Row>
                </Container>
            </Container>
        </Jumbotron>
    )
}

export default Contact