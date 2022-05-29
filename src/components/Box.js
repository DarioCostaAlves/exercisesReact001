import React,{useState} from 'react'

export default function Box(props){

    const squareStyle = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    return(
        
        <div className="square" style={squareStyle}>
            
        </div>
            
      
    )
}