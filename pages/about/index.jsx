import Loginform from '@/components/form/Loginform'
import React from 'react'
import {useState} from "react"

function index() {
    const [name,  setName]=useState("");
  console.log("Name",name);
  const [password, setPassword]=useState("");
  console.log("Password",password);
  const[submit, setSubmit]=useState("");
  console.log("submit",submit);
  function handleName(event){
    setName(event.target.value);
  }
  function handlePass(event){
    setPassword(event.target.value);
  }
  function handleSubmit(){
    if (password.length < 8 ){
      alert("password must be at least 8 characters")
      return;
      console.log('success');
    }
  }
  return (
    <>
     <h1>Hi {state}</h1>
     <h2> your email{state}</h2>
     <input type='text' onChange={handleName}/>
     <p>enter your username</p><input type='text' onChange={handleName}/>
     <p>enter your password</p><input type='password' onChange={handlePass}/>
     <br/>
     <button onClick={handleSubmit}>submit</button>
     <Loginform formname={name} formpassword={password}/>

    </>
  )
}

export default index