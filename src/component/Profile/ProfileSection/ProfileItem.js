import React from "react"

import Row from "react-bootstrap/Row"

import MetaInfo from "./MetaInfo.js"
import Content from "./Content.js"

function ProfileItem(props) {
    return (
        <Row className="item">
            <MetaInfo metaInfo={props.metaInfo} />
            <Content content={props.content} />
        </Row>
    )
}

export default ProfileItem