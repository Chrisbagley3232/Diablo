//Chris Bagley
//8/5/2023
import React, {Component} from "react";
import FlLogo from "./FlLogo.png";
import{
    Route, Routes,
    NavLink,
    HashRouter
    }from "react-router-dom";
    import Home from "./Home";
    import WeeklyDeals from "./WeeklyDeals";
    import Stuff from "./Stuff";
    import Contact from "./Contact";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <img alt="FlLogo" src={FlLogo} style={{height: 100,width: 100}} />
                    <div className="sBar">  
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="Buttons">
                        <button class="CartBtn">Cart</button>
                        <button class="AccountBtn">My Account</button>
                    </div>

                    <ul className="header">
                        <li><NavLink to ="/home">Home</NavLink></li>
                        <li><NavLink to="/weeklyDeals">Weekly Ad</NavLink></li>
                        <li><NavLink to="/stuff">Departments</NavLink></li>
                        <li><NavLink to="/contact">Shop and Earn</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/weeklyDeals" element={<WeeklyDeals />}/>
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