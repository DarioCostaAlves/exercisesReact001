import React,{useState} from 'react'
import Header from './components/Header'
import Count from './components/Count'
import Colors from './components/Colors'

export default function App(){

    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode(){
        setDarkMode(prevMode => !prevMode)
    }

    console.log(darkMode)

    return(
        <div>
            <Header />
            <div className="container-fluid--intro">
                First Project using reactJS alone without following any course, just checking the
                documentation and trying to build without more help.                                
            </div>             
            <Count />
            <Colors 
                darkMode={darkMode}
                toggle={toggleDarkMode}
            />
        </div>     
    ) 

}