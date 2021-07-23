import React from "react"
import Nav from 'react-bootstrap/Nav'

function NavItem(props) {
    return (
        <Nav.Link href={props.link}>{props.name}</Nav.Link>
    )
}

export default NavItem