import React from "react";
import Bank from "./component/Bank";
import "../src/App.css";
import { useSelector } from "react-redux";
import Statement from "./component/Statement";

function App() {
  const balance = useSelector((state) => state.amountReducer.balance);
  const amount = useSelector((state) => state.amountReducer.amount);

  
  
  return (
    <div className="App">
     
      <h1>Account Balance: {balance} INR</h1>

      <Bank />
      {amount ? <Statement/> : "" }
      
      
    </div>
  );
}

export default App;

//npm i redux react-redux redux-thunk
