import Loginform from '@/components/form/Loginform'
import React from 'react'
import {useState} from "react"

function index() {
    const [name,  setName]=useState("");
    console.log("Name",name);
    const [password, setPassword]=useState("");
    console.log("Password",password);
    const [email, setEmail] =useState("");
    console.log("Email", email);

    function handleName(event){
     setName(event.target.value);
    }
    function handlePass(event){
     setPassword(event.target.value);
    }
    function handleEmail(event){
      setEmail(event.target.value);
    }
    function handleSubmit(){
    if (password.length < 8 ){
      alert("password must be at least 8 characters");
      return;
    }
      console.log('success');
    }
  
  return (
    <>
     <h1> Welcome Back</h1>
     <p>enter your username</p><input type='text' onChange={handleName}/>
     <p>enter your password</p><input type='password' onChange={handlePass}/>
     <p>enter email</p><input type='email' onChange={handleEmail}/>
     <br/>
     <button onClick={handleSubmit}>submit</button>
     <Loginform formname={name} formpassword={password}/>

    </>
  )
}

export default index