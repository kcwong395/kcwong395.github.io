import React from "react"

import Col from "react-bootstrap/Col"

function Content(props) {
    return (
        <Col lg={8} xs={12}>
            <h5 className="font-pf">{props.content.title}</h5>
            <ul>
                {props.content.discriptions.map(point => <li>{point}</li>)}
            </ul>
        </Col>
    )
}

export default Content