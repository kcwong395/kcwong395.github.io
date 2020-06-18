import React from "react"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"

import PageHeader from "../PageHeader.js"
import ProjectItem from "./ProjectItem.js"

const pjColor = {
    pythonColor:    { backgroundColor: '#C1E1DC' }, /*  Baby Blue   */
    jsColor:        { backgroundColor: "#FFCCAC" }, /*  Peach       */
    javaColor:      { backgroundColor: "#FFEB94" }, /*  Butter      */ 
    cSharpColor:    { backgroundColor: "#258039" }, /*  Avocado     */ 
    cppColor:       { backgroundColor: "#ED5752" }, /*  Raspberry   */
};

const project =
    [
        {
            title: "CyberSecMaterial",
            text: "A Summary of EE Cyber Security Interest Group Materials.",
            link: "https://github.com/kcwong395/CyberSecMaterial",
            lang: "Pyhton",
            langColor: pjColor.pythonColor
        },
        {
            title: "HideNSeek",
            text: "A steganography tool to hide messages in an image.",
            link: "https://github.com/kcwong395/HideNSeek",
            lang: "C#",
            langColor: pjColor.cSharpColor
        },
        {
            title: "PPHP",
            text: "A web-based game with a hand gesture classifier model embedded.",
            link: "https://github.com/HANChenfeng/PPHP",
            lang: "Python",
            langColor: pjColor.pythonColor
        },
        {
            title: "Mahjong-Bingo",
            text: "A bingo game in mahjong tiles look.",
            link: "https://github.com/kcwong395/Mahjong-Bingo",
            lang: "Java",
            langColor: pjColor.javaColor
        },
        {
            title: "DataStructAndAlgor",
            text: "A collection of programming puzzles came accross.",
            link: "hhttps://github.com/kcwong395/DataStructAndAlgor_Collection",
            lang: "C++",
            langColor: pjColor.cppColor
        },
    ]

function Project() {
    return (
        <Jumbotron id="section-contact" style={{ backgroundColor: "#FFFB94" }}>
            <Container>
                <PageHeader
                    header="Latest Projects"
                    subHeader="Mom! It's not working!"
                />
                <Row>
                    { project.map(projectItem => <ProjectItem info={ projectItem } />)}
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Project