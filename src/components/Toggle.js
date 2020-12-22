import React, {Fragment} from "react"
import "./../styles/sidebar.css"

const Toggle = (props) => {
    
    return(
        <button className="grow" id="toggle" onClick={props.click}>&#8801;</button>
    )
}

export default Toggle