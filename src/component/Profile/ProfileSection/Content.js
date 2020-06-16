import React from "react"

import Col from "react-bootstrap/Col"

function Content(props) {
    return (
        <Col lg={8} xs={12}>
            <strong className="font-pf">{props.content.title}</strong><br />
            <p>
                <ul>
                    {props.content.discriptions.map(point => <li>{point}</li>)}
                </ul>
            </p>
        </Col>
    )
}

export default Content