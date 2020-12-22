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
    const {artists} = useContext(playerContext)
    const grey = "grey"
    const black = "black"
    return (
        <Accordion allowZeroExpanded>
            <SidebarAccordionItem artist={artists[0]} songIndexes={[0,1,2,3]}color={grey}/>
            <SidebarAccordionItem artist={artists[1]} songIndexes={[4,5,6]}color={black}/>
            <SidebarAccordionItem artist={artists[2]} songIndexes={[19,20]}color={grey}/>
            <SidebarAccordionItem artist={artists[3]} songIndexes={[7]}color={black}/>
            <SidebarAccordionItem artist={artists[4]} songIndexes={[8,9,10,11]}color={grey}/>
            <SidebarAccordionItem artist={artists[5]} songIndexes={[13, 14]}color={black}/>
            <SidebarAccordionItem artist={artists[6]} songIndexes={[23, 24]}color={grey}/>
            <SidebarAccordionItem artist={artists[7]} songIndexes={[15, 16]}color={black}/>
            <SidebarAccordionItem artist={artists[8]} songIndexes={[21, 22, 12]}color={grey}/>
            <SidebarAccordionItem artist={artists[9]} songIndexes={[17, 18]}color={black}/>
            
        </Accordion>
    );
}