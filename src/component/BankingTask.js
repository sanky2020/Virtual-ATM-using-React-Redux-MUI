import React from "react";
import "../App.css"

function BankingTask(props) {
    const {selectTask, task} = props;
  return (
    <>
      <button className="btn" onClick={selectTask} >{task}</button>
    </>
  );
}

export default BankingTask;
