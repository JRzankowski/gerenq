import React, {Component, useState} from 'react';

import {IoMdClose} from 'react-icons/io'


export const QuizGameSummaryQuestion = (props) => {
    const {handleExitQuestion,quizData,questionNumber,setAnswers,isCorrect} = props;
    return (
        <>
            <div className="quiz-game__summary-question">
                <span onClick={handleExitQuestion} className="question__back"><IoMdClose/></span>
                <p className='summary__question'>
                    {quizData[questionNumber].question}
                </p>
            </div>
            <div className="summary__answers">
                {setAnswers(questionNumber).map((value, index) => {
                    return (
                        <div key={index} data-answer={value}
                             className={`summary__answer ${isCorrect(value)}`}>
                            {value}
                        </div>
                    )
                })
                }
            </div>
        </>
    )
};








