import React from "react"

const gridElements = (props) => {
    return (
        <div className="grid--body">
            <p className="grid--items" onClick={props.handleClick}>{props.value}</p>
        </div>
    )
}

export default gridElements;