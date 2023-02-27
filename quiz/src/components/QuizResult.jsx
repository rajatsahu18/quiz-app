import React from 'react';
import sorry from '../assests/sorry.png';
import success from '../assests/success.png';

export const QuizResult = ({result, retry}) => {
  return (
    <div className="result-screen">
      <h2>Result: {result.percentage}%</h2>
      <p>Selected {result.correct} correct options out of {result.total} questions. </p>
      {result.percentage >= 50 ? <img src={success}/> : <img src={sorry}/>}
      <span>{result.percentage >= 50 ? "Well done !!": 'Work hard and try again!!'} </span>
      <button onClick={retry} >Retry</button>
    </div>
  ) 
}
