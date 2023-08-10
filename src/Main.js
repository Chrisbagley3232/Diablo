//Chris Bagley
//8/5/2023
import React, {Component} from "react";
import{
    Route, Routes,
    NavLink,
    HashRouter
    }from "react-router-dom";
    import Home from "./Home";
    import Stuff from "./Stuff";
    import Contact from "./Contact";
    import Image from "./Img.js";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <span>
                        <h1 className="title">Diablo IV</h1> 
                    </span>

                    <ul className="header">
                        <li><NavLink to="/">Overview</NavLink></li>
                        <li><NavLink to="/stuff">Season</NavLink></li>
                        <li><NavLink to="/contact">Forums</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/stuff" element={<Stuff />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;