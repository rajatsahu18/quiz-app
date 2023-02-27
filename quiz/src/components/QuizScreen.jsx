import React, { useState } from 'react';
import {QuizResult} from './QuizResult';
import {Question} from './Question';
import QuestionList from '../data/question.json';

export const QuizScreen = ({retry}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

  const calculatedResult = () => {
    let correct = 0
    QuestionList.forEach((question, index) => {
      if(question.correctOptionIndex === markedAnswers[index]) {
        correct++
      }
    })
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100)
    }
  }

  return (
    <div className='quiz-screen'>
      {
        isQuestionEnd ? (
          <QuizResult 
            result={calculatedResult()}
            retry={retry}
          />
        ) : (
          <Question
            question={QuestionList[currentQuestionIndex]} 
            totalQuestions={QuestionList.length}
            currentQuestion={currentQuestionIndex + 1}
            setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex - 1] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1)
            }}
          />
        )
      }
    </div>
  )
}
