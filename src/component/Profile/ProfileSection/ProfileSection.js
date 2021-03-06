import React from "react"

import ProfileItem from "./ProfileItem.js"

function ProfileSection(props) {
    return (
        <div>
            <h3 className="font-pf item">{props.info.header}</h3>
            {props.info.items.slice(0, 3).map(item =>
                <ProfileItem
                    metaInfo={item.metaInfo}
                    content={item.content}
                />
            )}
            <hr />
        </div>
    )
}

export default ProfileSection