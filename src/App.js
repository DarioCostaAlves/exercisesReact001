import React,{useState} from 'react'
import Header from './components/Header'
import Count from './components/Count'
import Colors from './components/Colors'
import Box from './components/Box'
//Data
import boxesData from './data/boxes'

export default function App(){

    const [darkMode, setDarkMode] = useState(false)
    const [squares, setSquares] = useState(boxesData)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))

    console.log(darkMode)

    return(
        <div>
            <Header />
            <div className="container-fluid--intro">
                <h2>
                    First Project using reactJS alone without following any course, just checking the
                    documentation and trying to build without more help.
                </h2>
            </div>             
            <Count />
            <Colors 
                darkMode={darkMode}
                toggle={toggleDarkMode}
            />
            <div className="container-squares">
                <h2>Boxes challenge here we go</h2>
                <div className="boxes">
                    {squareElements}
                </div>                
            </div>            
            
        </div>     
    ) 

}