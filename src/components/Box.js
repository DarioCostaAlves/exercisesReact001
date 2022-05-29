import React,{useState} from 'react'

export default function Box(props){
    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return(
        
        <div className="square" style={styles} onClick={props.toggle}>

        </div>
    
    )
}