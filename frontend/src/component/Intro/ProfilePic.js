import React from "react"

import Col from "react-bootstrap/Col"

function ProfilePic() {
    return (
        <Col className="item text-center">
            <img id="recent_pic" src={require("../../img/recent_pic.jpg")} alt="recent_pic" width="300" height="300" />
        </Col>
    )
}

export default ProfilePic