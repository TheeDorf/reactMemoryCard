import React, { Component } from "react"

function MemoryGame (){
  const [sequence,setSequence]= useState([]);
  const [currentInput, setCurrentInput]= useState("")
  const [inputIndex, setInputIndex]= useState(0)
  const [score, setScore] = useState(0);

const generateSequence = () => {
  const newSequence = [];
  for (let i=0; i <10;i++){
    const randomNumber = Math.floor(Math.random()*20);
    newSequence.push(randomNumber);
  }
}







}


render(){
  return(
    <div>
    </div>
  );
}



export default MemoryGame