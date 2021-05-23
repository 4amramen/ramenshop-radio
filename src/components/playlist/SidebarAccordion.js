import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import playerContext from './../../context/playerContext'
import { useContext } from 'react'
import SidebarAccordionItem from './SidebarAccordionItem'
import '../../styles/accordion.css'

 
export default function SidebarAccordion(props) {
    const {artists, sidebarSongs} = useContext(playerContext)
    const grey = "grey"
    const black = "black"

    return (
        <Accordion allowZeroExpanded>
            <SidebarAccordionItem artist={artists[0]} songIndexes={[0,1,2,3]}color={grey}/>
        </Accordion>
    );
}