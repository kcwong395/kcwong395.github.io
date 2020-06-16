import React from "react"

import Row from "react-bootstrap/Row"

import ProfileItem from "./ProfileItem.js"

function ProfileSection(props) {
    return (
        <div>
            <h3 className="font-pf item">{props.info.header}</h3>
            {props.info.items.map(item => 
                <ProfileItem
                    metaInfo={item.metaInfo}
                    content={item.content} 
                />
            )}
        </div>
    )
}

export default ProfileSection