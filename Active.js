import React, { useContext }  from "react";
import {valueConst22} from './Taken';
import {Link} from "react-router-dom";

const Active=()=>{
  
    return(
        <>
       



        <div className="newdiv2">
          
          <Link to="/takencount">Taken item</Link>
          
          <Link to="/">Home Page</Link>
      </div>
        </>
    )
}
export default Active;