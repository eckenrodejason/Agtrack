// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";

//The following are imports from other classes 4/10/19

// import Field from './src/Fields/field';
// import Home from './src/Home/home';
// import Job from './src/Jobs/job';

// end import of classes

//import IndecisionApp from "./components/IndecisionApp";

const template = <p>This is a webpack test</p>;
ReactDOM.render(template, document.getElementById("app"));



class App extends Component{
    redner(){
        return(
            <div>
                <header className= "App-Header">
                <img src={logo} className= "App-logo" alt="logo"/>
                <h1 className="App-title"> Welcome to Agtrack</h1>
                </header>

                add stuff here


            </div>
        )
    }

}
