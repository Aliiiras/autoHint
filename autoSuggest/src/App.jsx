import Input from "./Input";
import { useState } from "react";
import cities from "./cities.json"

function App() {
   const [hint,setHint] = useState("")
   const [get,setGet] = useState([])

   const lowercaseCities = cities.map(city => city.toLowerCase());

   const handleChange = (e) => {
      const value=e.target.value;
      setGet(value);
      if(value.length>0){
            const filter = lowercaseCities.filter((c)=>c.startsWith(value));
            const sameFilter = filter.map(city => city.charAt(0).toUpperCase() + city.slice(1));
            setHint(sameFilter);
         }
      else{
         setHint("");
      }
   };
   const handleSuggestion = (c) => {
      
      setGet(c);
      setHint("");
   }
   return (
   <>
   <div><Input handleChange={handleChange} hint={hint} handleSuggestion={handleSuggestion} get={get}/></div>
   </>
   )
}

export default App;
