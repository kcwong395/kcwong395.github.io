import React from "react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import ProfilePic from "./ProfilePic.js"
import NewsSection from "./News/NewsSection.js"

function Content() {
    return (
        <Row lg={2} xs={1} className="align-items-center">
            <ProfilePic />
            <Col className="item">
                <h3 className="font-pf header">Wong Ka Chung, Martin</h3>
                <p>
                    I am an Undergraduate student studying Information Engineering (INFE) at City University of Hong Kong (CityU).
                    <br />
                    <br />
                    My areas of interest include
                </p>
                <ul>
                    <li>Cyber Security and Forensics</li>
                    <li>Software, Apps and Web Development</li>
                </ul>
                <a href={require("../../doc/resume.pdf")} target="_blank" rel="noopener noreferrer">Résumé</a> (Last updated: 09 Jan 2019)
                <br />
                <br />
                <NewsSection />
            </Col>
        </Row>
    )
}

export default Content