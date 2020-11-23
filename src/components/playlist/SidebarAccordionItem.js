import React from 'react';

import {
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import SidebarSongContainer from './SidebarSongContainer'
    import playerContext from './../../context/playerContext'
    import { useContext } from 'react'
    import ArtistBlock from './ArtistBlock'
 
// Demo styles, see 'Styles' section below for some notes on use.
 
export default function SidebarAccordian(props) {

    return (
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {props.artistName}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                         <ArtistBlock songIndexes={props.songIndexes}/>
                </AccordionItemPanel>
            </AccordionItem>
    );
}