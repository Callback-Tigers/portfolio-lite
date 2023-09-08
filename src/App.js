import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
// import "./style.css"
impirt sectionData from "./sectionData";




const App = () => {


    return(
        <div>
            <Navbar/>
            <AboutMe/>
           {
              sectionData.map((data)=>(
                    <Section 
                       title = {data.title}
                       description = {data.description}
                    />
              ))
           }
            
        </div>
    )
}

export default App;