import { useState } from 'react';
import './App.css'
import Greeting from './Greeting';

function App() {
  const age : number = 21;
  let firstName : string = "Dhruv";
  let city:string = "Mumbai";
  let message:string = "Hello World";
  let score=100;


  const [count,setCount] = useState<number>(0);

  function increment(){
    setCount(count+1);
  }
  function decrement(){
    if (count>0){
      setCount(count-1);
    }
    else{
      setCount(0);
    }
  }
  function reset(){
    setCount(0);
  }

  return (
   <div>
    <Greeting name='Dhruv' bio='Software Engineering Intern'/>
     <p>Hello Dhruv Mehta ,just Started Typescript, My age is: {age}</p>
    <p>FirstName:{firstName}</p>
    <p>City:{city}</p>
    <p>message:{message}</p>
    <p>Score:{score}</p>
    <button onClick={() =>{increment()}}>+ </button>
    <button onClick={() => {decrement()}}>- </button>
    <button onClick={() => {reset()}}>Reset </button>
    <p>{count}</p>
   </div>
  )
}

export default App
