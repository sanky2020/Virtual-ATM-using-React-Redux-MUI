import React, { useState } from "react";
import Bank from "./component/Bank";
import "../src/App.css";
import { useSelector } from "react-redux";
import Statement from "./component/Statement";
import Welcome from "./component/Welcome";

function App() {
  const balance = useSelector((state) => state.amountReducer.balance);
  const amount = useSelector((state) => state.amountReducer.amount);
  const [welcome, setWelcome] = useState(true);

  const callback=(data)=>{
    console.log(data)
    setWelcome(false)
  }
  return (
    <div className="App">
    {welcome ? <Welcome callback={callback}/> : ""}
     
      <h1>Account Balance: {balance} INR</h1>

      <Bank />
      {amount ? <Statement/> : "" }
      
      
    </div>
  );
}

export default App;

//npm i redux react-redux redux-thunk
