import React from "react"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function MetaInfo(props) {
    return (
        <Col lg={4} xs={12} className="font-pf">
            <Row className="metainfo">
                <Col xs={12} className="header">
                    <h4>{props.metaInfo.organization}</h4>
                </Col>
                <Col xl={6} lg={12} sm={4} xs={12} className="period">
                    {props.metaInfo.period}
                </Col>
                <Col xl={6} lg={12} sm={6} xs={12}>
                    <i class="fa fa-map-marker"></i>
                    {props.metaInfo.location}
                </Col>
            </Row>
        </Col>
    )
}

export default MetaInfo