import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {useState} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
 
  const [name,  setName]=useState("");
  console.log("Name",name);
  const [password, setPassword]=useState("");
  console.log("Password",password);
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

    </>
  );
}
