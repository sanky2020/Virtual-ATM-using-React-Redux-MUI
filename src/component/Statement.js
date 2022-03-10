import React, {useState} from "react";
import { useSelector } from "react-redux";
import "../App.css";
import Table from './Table'

function Statement() {
  const [statement, setStatement] = useState(false);

  const { date, time, accType, amount, balance, statementList } = useSelector(
    (state) => state.amountReducer
  );
    
  const rows = statementList

  const toggleStatement = () =>{
    setStatement(!statement)
  }
  
  return (<>
  <div className="payment-slip">
      <h4>Payment Receipt:</h4>
      <p>Type: {accType}</p>
      <p>Amount: {amount} Rs</p>
      <p>Balance: {balance} Rs</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
    </div>
   
    <button onClick={toggleStatement}>View Statement</button>
      {statement ? <Table rows={rows}/>:""}
  </>
    
  );
}

export default Statement;
