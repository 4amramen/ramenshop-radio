import React from 'react';
import ReactGA from 'react-ga';


export default function NowPlayingLinks(props) {
    if(props.song == undefined){
        return null;
    }

    let spotify = props.song[0];
    let soundcloud = props.song[1];

   


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        handleGAEvent(url);
    }

    const handleGAEvent = (url) => {
        // ReactGA.event({
        //     category: "Link Click: " + name,
        //     action: "User went to: " + url,
        //   });
    }
    if(spotify!="" && soundcloud!=""){
        return (
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(spotify)}}>
                    <img className="nowplaying-link1 grow-link" src="buttons/spotify-link.png" /> 
                </a> 
                <a onClick={() => {openInNewTab(soundcloud)}}>
                    <img className="nowplaying-link2 grow-link" src="buttons/soundcloud-link.png" /> 
                </a> 
            </div>
        );
    } else if (spotify!=""){
        return (
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(spotify)}}>
                    <img className="nowplaying-link2 grow-link" src="buttons/spotify-link.png" /> 
                </a> 
            </div>
        );
    } else if (soundcloud != ""){
        return(
            <div className="nowplaying-links">
                <a onClick={() => {openInNewTab(soundcloud)}} >
                    <img className="nowplaying-link2 grow-link" src="buttons/soundcloud-link.png" /> 
                </a> 
            </div>
        )
    } else return null;
}

