import React, {Fragment} from "react"
import "./../sidebar.css"

const Toggle = (props) => {
    
    return(
        <button id="toggle" onClick={props.click}>&#8801;</button>
    )
}

export default Toggle