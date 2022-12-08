import { useState } from "react";
import Home from "./pages/Home";
import Input from "./components/input";
import Login from "./Login/login";


function App() {
  const [appdata,setappdata] = useState(" this is state app")
  const[count,setCount] = useState(0)



  return (
    <div className="App">

        {/* FUNCTIONAL COMPONENTS */}
        <Home appdata={appdata} setAPPdata={setappdata} 
          count = {count} setCount = {setCount}
          
        />

        {count}
        <button
          onClick={()=>setCount(count-1)}>
            -
        </button>
        <Input/>
        <Login />
       
    </div>
  );
}

export default App;
