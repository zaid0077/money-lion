import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";


export const ProgressBarItem = (props) => {
    return(
        <ProgressBar now={props.number} variant={props.variant}/>
    )
}