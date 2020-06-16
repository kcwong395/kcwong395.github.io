import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import PageHeader from "../PageHeader.js"
import ContactItem from "./ContactItem.js"


function Contact() {
    return (
        <Jumbotron id="section-contact" style={{ backgroundColor: "#C1E1DC" }}>
            <Container>
                <PageHeader
                    header="Looking for Collaboration?"
                    subHeader="Let me know the idea in your mind..."
                />
                <Container>
                    <Row>
                        <ContactItem />
                        <ContactItem />
                        <ContactItem />
                    </Row>
                </Container>
            </Container>
        </Jumbotron>
    )
}

export default Contact