import React from 'react';
import home from '../assests/home.png'

export const JoinScreen = ({start}) => {
  return (
    <div className='join-screen'>
      <img src={home} alt="" />
      <h2>Join Quiz</h2>
      <p>Let's test your knowledge</p>
      <ul className='list'>
        <li>This is a timed quiz. You will get 10 seconds to answer the question.</li>
        <li>Once you answered a question you can't return to the previous question.</li>
        <li>After completing all the questions result will be shown.</li>
      </ul>
      <button onClick={start}>Start</button>
    </div>
  )
}
