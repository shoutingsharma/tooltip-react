import { useState } from "react";
import Tooltip from "./tooltip";
const Button =() =>{
    const [flag,setFlag]=useState(false);
    const position =['top','bottom','left','right'];
    const count=Math.floor(Math.random()*4)
     
    
    return(
        <div className="container">
        <div className="btn-container">
            <button
            onMouseEnter={()=>setFlag(true)} 
            onMouseLeave={()=>setFlag(false)}
             className="btn">Hover over Me!</button>
            
        </div>
         {flag?<Tooltip position={position[count]}/>:null}
        </div>
    )
}
export default Button;