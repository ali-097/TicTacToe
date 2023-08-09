import React from "react"
import {Link} from 'react-router-dom';
import '../styles/End.css'

const End = () => {
    const endState = localStorage.getItem("endState")
    return (
        <div className="end--container">
            <h1 className="main--header">{endState}</h1>
            <Link to='/Game'>
                <button className="button-53">Try Again</button>
            </Link>
            <br></br><br></br>
            <Link to='/'>
                <button className="button-53">Home</button>
            </Link>
        </div>
    )
}

export default End;