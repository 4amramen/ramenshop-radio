import React from 'react';
import ReactGA from 'react-ga';


// Demo styles, see 'Styles' section below for some notes on use.
 
import {
 
    AccordionItemButton,
} from 'react-accessible-accordion';

export default function SidebarLinks(props) {
    let name = props.artist[0];
    let spotify = props.artist[1];
    let soundcloud = props.artist[2];



    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        handleGAEvent(url);

    }

    const handleGAEvent = (url) => {
        ReactGA.event({
            category: "Link Click: " + name,
            action: "User went to: " + url,
          });
    }
    if(spotify!="" && soundcloud!=""){
        return (
            <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(spotify)}} >
                    <img className="sidebar-link1 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/spotify-link.png" /> 
                </a> 
                <a onClick={() => {openInNewTab(soundcloud)}}>
                    <img className="sidebar-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/soundcloud-link.png" /> 
                </a> 
            </AccordionItemButton>
        );
    } else if (spotify!=""){
        return (
            <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(spotify)}} >
                    <img className="sidebar-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/spotify-link.png" /> 
                </a> 
            </AccordionItemButton>
        );
    } else if (soundcloud != ""){
        return(
        <AccordionItemButton className={"accordion-button " + props.color}>
                {name}
                <a onClick={() => {openInNewTab(soundcloud)}} >
                    <img className="sidebar-link2 grow-link" src="https://buttons.s3-us-west-2.amazonaws.com/soundcloud-link.png" /> 
                </a> 
            </AccordionItemButton>
        )
    } else return null;
}

