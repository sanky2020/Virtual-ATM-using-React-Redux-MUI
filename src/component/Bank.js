
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from '../store/index'
import BankingTask from './BankingTask';
import '../App.css'

function Bank() {
  const [depositvalue, setDepositValue] = useState(0);
  const [withdrawvalue, setWithdrawValue] = useState(0);
  const [depo, setDepo] = useState(false);
  const [withdr, setWithdr] = useState(false);

   const dispatch = useDispatch();
   const selectTask = (e) => {

    // console.log(e.target.innerText)

    if(e.target.innerText === "Deposit"){
      setWithdr(false)
      setDepo(true)
    }
    else{
      setDepo(false)
      setWithdr(true)
    }
   }

  return (
    <div>
    <h3>Welcome to Virtual ATM </h3>
    <div className='task-selector'>
    <p>Please select the Task: </p>
        <BankingTask selectTask={selectTask} task={'Deposit'}/>
        
        <BankingTask className='second-btn' selectTask={selectTask} task={'Withdraw'}/>
    </div>
    
        {depo ? <div className='input-section'><h5>(Enter Amount to be Deposited)</h5>
         <input name='deposit' value={depositvalue} onChange={(e)=>setDepositValue(e.target.value)}/>
         <button onClick={()=>{dispatch(actionCreators.depositMoney(depositvalue))} }>Deposit Money</button></div> : ""}
         {/* <button onClick={()=>{dispatch(actionCreators.depositMoney(depositvalue));dispatch(actionCreators.depositDetails(depositvalue))} }>Deposit Money</button></> : ""} */}
        
        {withdr ? <div className='input-section'>
          <h5>(Enter Amount to be Withdrawn)</h5>
        <input name='withdraw' value={withdrawvalue} onChange={(e)=>setWithdrawValue(e.target.value)}/>
        <button onClick={()=>{dispatch(actionCreators.withdrawMoney(withdrawvalue))}}>WithDraw Money</button>
        </div> : ""}
        
    </div>
  )
}

export default Bank