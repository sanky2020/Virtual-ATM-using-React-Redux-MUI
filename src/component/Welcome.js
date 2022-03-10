import React, { useState } from 'react';
import '../App.css'

function Welcome(props) {
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")
    const {callback} = props

    const resetfield =()=>{
        setUsername('')
        setPassword('')
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(username, password)
        if(username === password){
            alert("Login Successful")
            callback("success")
            // resetfield()
        }
        else{
            alert("UserName or Password is incorrect, please try-again")
            resetfield();
        }
    }
    
  return (
    <div className='welcome'>
        <h1>Virtual Bank welcomes you.</h1>
        <h2>Enter username and password:</h2>
        <form className='form' onSubmit={(e)=>{submitHandler(e)}}>
        <div>
        <p>UserName:</p>
        <input required type='text' name='username' value={username} placeholder='Enter your Username:' onChange={(e)=>{setUsername(e.target.value)}} autoFocus/>
            
        </div>
        <div>
        <p>Password:</p>
        <input required type='password' name='password' value={password} placeholder='Enter your Password:' onChange={(e)=>{setPassword(e.target.value)}}/><br/>

        </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Welcome