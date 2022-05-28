import React from "react"
import Header from "./components/Header"
import Count from "./components/Count"

export default function App(){

    return(
        <div>
            <Header />
            <div className="container-fluid--intro">
                First Project using reactJS alone without following any course, just checking the
                documentation and trying to build without more help.                                
            </div>             
            <Count />
        </div>     
    ) 

}