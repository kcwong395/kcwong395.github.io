import React from "react"

import Col from "react-bootstrap/Col"

function ContactItem() {
    return (
        <Col lg={4} xs={12} className="font-pf">
            <a href="https://github.com/kcwong395" target="_blank" class="btn">
                <i class="fa fa-github fa-2x"></i>GitHub
            </a>
        </Col>
    )
}

export default ContactItem