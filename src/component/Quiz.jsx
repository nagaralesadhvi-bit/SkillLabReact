import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './Quiz.css';

function Quiz() {
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const handleClick = (option) => {
    setCurrentAnswer(option)
    if(option === Questions[currentQuestionIndex].answer)
      {setScore(score + 1)}
  }
  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  }
  return (
    <div>
      {currentQuestionIndex < Questions.length ?         <div>
        <QuestionList question={Questions[currentQuestionIndex].question}
      options={Questions[currentQuestionIndex].options} handleClick={handleClick} 
      currentAnswer={currentAnswer}/>
      <button disabled={currentAnswer === null} className={currentAnswer === null ? 
      'button-disable' :'button'} onClick={handleNextQuestion}>Next Question</button>
    </div> : <div>Your score is {score}</div>}
    </div>
  )
}

export default Quiz
