import React, {Component} from "react";
import gatorade from "./gatorade.png";
import steak from "./steak.jpg";
import spagettio from "./spagettio.jpg";
import watermelon from "./watermelon.jpg"; 

class WeeklyDeals extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2>Weekly Deals</h2>
                </div>
                <div class="itemCards">
                    <img alt="gatorade" src={gatorade} style={{height: 100,width: 100}} />
                        <div class="description">
                            <p>Gatorade</p>
                            <p>2 for $1</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="steak" src={steak} style={{height: 100,width: 100}} />
                        <div class="description">
                            <p>Ribeye Steak</p> 
                            <p>$2.49 per pound</p>
                        </div>
                </div>
                <div class="itemCards">    
                    <img alt="spagettio" src={spagettio} style={{height: 100,width: 100}} />
                        <div class="description">
                            <p>Spagettio's</p>
                            <p>2 for $4</p>
                        </div>
                </div>
                <div class="itemCards">
                    <img alt="watermelon" src={watermelon} style={{height: 100,width: 100}} />
                        <div class="description">
                            <p>Watermelons</p>
                            <p>$1.25 per pound</p>
                        </div>
                </div>
            </div>
        );
    }
}
export default WeeklyDeals;