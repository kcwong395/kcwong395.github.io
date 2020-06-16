import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import PageHeader from "../PageHeader.js"
import ProfileSection from "./ProfileSection/ProfileSection.js"

function Profile() {

    const sections =
        [
            {
                header: "Education",
                items:
                    [
                        {
                            metaInfo:
                            {
                                organization: "City University of Hong Kong",
                                period: "Aug 2017 - Jul 2021",
                                location: " Hong Kong"
                            },
                            content:
                            {
                                title: "Bachelor of Engineering in Information Engineering",
                                discriptions:
                                    [
                                        "GPA: 3.84 / 4.3 (Major GPA: 3.99 / 4.3)",
                                        "Honors: CENG Mentor Service Award (18/19), Dean's List (Sem A 17/18, 18/19, Sem A 19/20)",
                                        "Relevant Coursework: Security Technology, Digital Forensics, Java Programming & Applications"
                                    ]
                            },
                        },
                        {
                            metaInfo:
                            {
                                organization: "National Cheng Kung University",
                                period: "Jul 2018 - Aug 2018",
                                location: " Taiwan"
                            },
                            content:
                            {
                                title: "Summer Exchange - Electrical Engineering and Computer Science Summer Program",
                                discriptions:
                                    [
                                        "Relevant Coursework: Java Programming | github",
                                    ]
                            },
                        }
                    ]
            },
            {
                header: "Work Experience",
                items:
                    [
                        {
                            metaInfo:
                            {
                                organization: "Department of Electrical Engineering, CityU",
                                period: "Oct 2019 - Present",
                                location: " Hong Kong"
                            },
                            content:
                            {
                                title: "Part time - Research Assistant, supervised by Dr. Alan K.H. Yeung",
                                discriptions:
                                    [
                                        "Developed a Steganography tool in C# that embedded messages into images",
                                        "Investigated various file systems and developed an reversible approach to encrypt the data of an USB to enhance data confidentiality"
                                    ]
                            },
                        },
                        {
                            metaInfo:
                            {
                                organization: "Institute of Software, Chinese Academy of Sciences",
                                period: "Jun 2019 - Jul 2019",
                                location: " Beijing, China"
                            },
                            content:
                            {
                                title: "Summer Internship - Research Intern, supervised by Dr. Libo Zhang, ISRC",
                                discriptions:
                                    [
                                        "Performed data collection, labeling, data-preprocessing and gathered a total of 5k images",
                                        "Designed a deep hand pose detection model with 98.6% validation accuracy",
                                        "Extended the developed model to a web-based application"
                                    ]
                            },
                        }
                    ]
            },
            {
                header: "Achievements and Recognitions",
                items:
                    [
                        {
                            metaInfo:
                            {
                                organization: "HK CTF Association",
                                period: "Oct 2019",
                                location: " Hong Kong"
                            },
                            content:
                            {
                                title: "Finalist - CTF Open 2019 Student Category",
                                discriptions:
                                    [
                                        "Member of GRAD501, in charge of Forensics and Miscellaneous Topics"
                                    ]
                            },
                        }
                    ]
            },
            {
                header: "Leadership And Services",
                items:
                    [
                        {
                            metaInfo:
                            {
                                organization: "Campus Services, Department of Electrical Engineering, CityU",
                                period: "Sep 2018 - Present",
                                location: " Hong Kong"
                            },
                            content:
                            {
                                title: "Mentor of Student Mentoring Scheme",
                                discriptions:
                                    [
                                        "Awarded CENG Metor Service Award (18 / 19)",
                                        "Handled enquiries from freshmen regarding campus resources and academic issues"
                                    ]
                            },
                        },
                        {
                            metaInfo:
                            {
                                organization: "Community Services, Hong Kong Red Cross Princess Alexandra School",
                                period: "Jan 2018 - Apr 2018",
                                location: " Hong Kong"
                            },
                            content:
                            {
                                title: "Volunteer of City-Youth Empowerment Project",
                                discriptions:
                                    [
                                        "Took part in a semester-long voluntary scheme and offered tutorial classes for disabilities"
                                    ]
                            },
                        },
                    ]
            }
        ]

    return (
        <Jumbotron id="section-profile" style={{ backgroundColor: "#FFCCAC" }}>
            <Container>
                <PageHeader
                    header="Profile"
                    subHeader="Why would you like to stalk me..."
                />

                {sections.map(section => <ProfileSection info={section} />)}

            </Container>
        </Jumbotron>
    )
}

export default Profile