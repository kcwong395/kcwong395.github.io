import React from "react"

function PageHeader(props) {
    return (
        <div>
            <div className="text-center font-pf">
                <h2 className="p-1">{props.header}</h2>
                <p className="p-1">{props.subHeader}</p>
            </div>
            <hr />
        </div>
    )
}

export default PageHeader