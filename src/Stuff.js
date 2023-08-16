import React, {Component} from "react";

class Stuff extends Component{
    render(){
        return(
            <div>
                <h2>Departments</h2>
                <div class="grid-container">
                    <div class="new">New Arrivals</div>
                    <div class="organic">Organic</div>
                    <div class="local">Local</div>
                    <div class="produce">Produce</div>
                    <div class="meat">Meat</div>
                    <div class="seafood">Seafood</div>
                    <div class="deli">Deli</div>
                    <div class="dairy">Dairy</div>
                    <div class="bev">Beverages</div>
                    <div class="bakery">Bakery</div>
                </div>
            </div>
        );
    }
}
export default Stuff;