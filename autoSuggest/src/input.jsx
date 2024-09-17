/* eslint-disable react/prop-types */

import { useState } from "react";
import Recent from "./Recent";

const Input = ({handleChange,hint,handleSuggestion,get}) => {
  const [recent,setRecent]=useState(null);
  return (
    <div className="input">
      <label htmlFor="input" >
        {/* {hint} */}
      </label>
      <input
        type="text"
        id="input"
        value={get}
        onChange={handleChange}
      />
      {hint.length>0 && (
        <ul className="suggest">
          {hint.map((c,i)=> 
          (<li key={i} onClick={()=>{handleSuggestion(c); setRecent(c)}}>{c}</li>
          ))}
        </ul>
      )}
      <Recent recent={recent}/>
    </div>

  );
};

export default Input;
