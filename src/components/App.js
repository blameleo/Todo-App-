import React from "react";
import Header from "./Header";
import Input from "./Input";
import Todo from "./Todo";
import { useState } from "react";

const App = () => {
  const [array, SetArray] = useState([]);
  function handleClick(inputText, setInputText) {
    setInputText("");
    if (inputText) {
      SetArray((prev) => [...prev, inputText]);
    } else {
      alert("please eneter");
    }
  }

  function del(id) {
SetArray((prev)=> {
   return prev.filter((item, index) =>{
    return index !== id
   })
})
  }

  return (
    <div>
      <Header />
      <Input addNote={handleClick} />

      {array.map((item,index) => (
        <Todo key={index} id={index} todo={item}  del={del}/>
      ))}
    </div>
  );
};

export default App;
