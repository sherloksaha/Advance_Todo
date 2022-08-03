import React, { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { createContext } from "react";
import Taken from "./Taken";
import Active from "./Active";


export const valueConst2 = createContext();
export const valueConst3 = createContext();
function Todo() {
  
  const[flagarr,setFlagarr]=useState([]);
  const[flagarr2,setFlagarr2]=useState([]);
  const[flags,setFlag]=useState();
  const[flags2,setFlag2]=useState();
  const [state1,setState1]=useState({});
  const[state2,setState2] = useState([]);

  useEffect(() => {
  newcount();
  newcount1();
},[state1,state2,flags,flags2]);

const addchange=(e)=>{
  let change=e.target.value;
  setState1({
    item:change,
    flag:true
  });

}

const listItem=()=>{
  setState2((old)=>[...old,state1]);
  setState1({item:""});
}
function newcount(){
    const s= state2.filter((ele)=> ele.flag===true)
    setFlag(s.length);
    setFlagarr((old)=>[...s]);
}
function newcount1(){
  const p = state2.filter((ele)=> ele.flag!==true)
  setFlag2(p.length);
  setFlagarr2(()=>[...p]);
}


  return (
    <>
      <div className="firstDiv">
      
      <input type="text" value={state1.item} onChange={addchange} placeholder="Type Something..." className="inputs"/>
      <button onClick={listItem} className="butt" value="Add+">Add</button>
      </div>
      <div className="newdiv">
          {
              state2.map((item,index)=>{
              return <div key={index}>
 
                    
                    <input className="off" type="button" value="O" onClick={()=>{
                      let newArr=[...state2];
                      newArr[index].flag=false;
                      setState2(newArr);
                    }}/>             
                    
                    
                    <li  className="design"  style={{textDecoration:item.flag?"":"line-through"}}>
                    {item.item}
                    </li>

                  </div>   
            })
          }

      </div>


      
         

      


      <div className="newdiv2">
          <Link to="/activecount">Active item : {flags}</Link>
          <Link to="/takencount">Taken item:{flags2}</Link>          
          <Link to="/">Home Page</Link>
      </div>

          <valueConst2.Provider value={"h"}>
            <valueConst3.Provider value={"k"}>
            
            </valueConst3.Provider>
          </valueConst2.Provider>
       
     </>
  );
}

export default Todo;
