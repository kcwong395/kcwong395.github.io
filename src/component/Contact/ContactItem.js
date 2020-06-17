import React from "react"

import Col from "react-bootstrap/Col"

function ContactItem(props) {
    return (
        <Col lg={4} xs={12} className="font-pf">
            <a href={props.link} target="_blank" class="btn">
                <i className={"fa fa-2x " + props.icon} ></i>{props.content}
            </a>
        </Col>
    )
}

export default ContactItem