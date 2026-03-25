import React from 'react'
import Quiz from './component/Quiz'

function App() {
  const Questions = [
    {
      question : "What is npm ?",
      options : ['node package manager','node partial mode','never pass message','none of the above'],
      answer : "node package manager"
    },
    {
      question : "What is react ?",
      options : ['css framework','react framework','react library','testing tool'],
      answer : "react library" 
    },
    {
      question : "What is 1 + 1 ?",
      options : ['5','8','1','2'],
      answer : "2" 
    }
  ];
  return (
    <div>
      <Quiz/>
    </div>
  )
}

export default App
