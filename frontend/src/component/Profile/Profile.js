import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import PageHeader from "../PageHeader.js"
import ProfileSection from "./ProfileSection/ProfileSection.js"

import profile from "../../assets/profile.json"

function Profile() {

    return (
        <Jumbotron id="section-profile" style={{ backgroundColor: "#FFCCAC" }}>
            <Container>
                <PageHeader
                    header="Profile"
                    subHeader="Why would you like to stalk me..."
                />

                {profile.map(section => <ProfileSection info={section} />)}

            </Container>
        </Jumbotron>
    )
}

export default Profile