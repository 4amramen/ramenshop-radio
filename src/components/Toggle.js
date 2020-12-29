import React, {Fragment} from "react"
import "./../styles/sidebar.css"

const Toggle = (props) => {
    
    return(
        <button className="grow" id="toggle" onClick={props.click}>&#8801;
                    {/* <img className="toggle-image" src="/buttons/starhamburger.png"/> */}

        </button>
    )
}

export default Toggle