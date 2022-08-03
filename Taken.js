import React, { useContext } from "react";
import {Link} from "react-router-dom";



const Taken=()=>{
  
    return(
        <>


        <div className="newdiv2">
          <Link to="/activecount">Active item</Link>
         
          
          <Link to="/">Home Page</Link>
      </div>
        </>
    )
}
export default Taken;