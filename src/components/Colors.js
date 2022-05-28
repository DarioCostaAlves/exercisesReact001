import React from 'react'

export default function Colors(props){
    return(
        <div className={props.darkMode ? "container-gray" : "container-dark"}>
            <h3>Change background theme exercise</h3>
            <button onClick={props.toggle}>Let's Change brother</button>
        </div>
    )

}