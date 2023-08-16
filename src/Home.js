import React, {Component} from "react";
import h1 from "./h1.PNG";
import h2 from "./h2.PNG";
import h3 from "./h3.PNG";
import h4 from "./h4.PNG";
import h5 from "./h5.PNG"; 

class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2>Home</h2>
                </div>
                <div class="hItemCards">
                    <img alt="h1" src={h1} style={{height: 75,width: 90}} />
                        <div class="description">
                            <p>FREE Pickup or Delivery</p>
                        </div>
                </div>
                <div class="hItemCards">
                    <img alt="h2" src={h2} style={{height: 75,width: 90}} />
                        <div class="description">
                            <p>Budget-Friendly</p> 
                        </div>
                </div>
                <div class="hItemCards">    
                    <img alt="h3" src={h3} style={{height: 75,width: 90}} />
                        <div class="description">
                            <p>Add More Vitamins</p>
                        </div>
                </div>
                <div class="hItemCards">
                    <img alt="h5" src={h5} style={{height: 75,width: 90}} />
                        <div class="description">
                            <p>Save on New Items</p>
                        </div>
                </div>
                <div class="hItemCards">
                    <img alt="h4" src={h4} style={{height: 75,width: 90}} />
                        <div class="description">
                            <p>Check Out Our Deals</p>
                        </div>
                </div>
            </div>
        );
    }
}
export default Home;