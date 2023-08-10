import React,{Component} from 'react';
import lilith from "./lilith.jpg";

export class Image extends Component{
    render(){
        return(
            <div className="img">
                <img alt="Lilith" src={lilith} />
            </div>         
        );
    }
}
export default Image;