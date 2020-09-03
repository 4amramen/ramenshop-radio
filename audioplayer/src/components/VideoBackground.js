import React, { Component, } from "react"

<<<<<<< HEAD
function VideoBackground(props) {
    return(
        <video className={"video-background " + props.multiply ? "multiply" : '' } autoPlay muted loop>
            <source src={"videos/"+props.source} type="video/mp4"></source>
=======
function VideoBackground() {
    return(
        <video className="video-background" autoPlay muted loop>
            <source src="videos/rain.mp4" type="video/mp4"></source>
>>>>>>> 5d950bbdd39cfba7347aed53c1c182c3540a3500
        </video>
    )

}

export default VideoBackground;
