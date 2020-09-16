import React, { Component, } from "react"

function VideoBackground(props) {
    return(
        <video className={"video-background " + props.multiply ? "multiply" : '' } autoPlay muted loop>
            <source src={"videos/"+props.source} type="video/mp4"></source>

        </video>
    )

}

export default VideoBackground;
