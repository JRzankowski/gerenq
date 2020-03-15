import React, {useState} from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

export const SummaryBox = (props) => {
    const {subject,numberOfQuizzes,section} = props;
    let correctAnswers=parseInt(localStorage.getItem(`${props.subject}${section}`));
    let incorrectAnswers=parseInt(localStorage.getItem(`${props.subject}${section}Count`)) * 10 - parseInt(localStorage.getItem(`${props.subject}${section}`));
    let percentOfCorrect = Math.round((correctAnswers*100)/(parseInt(localStorage.getItem(`${props.subject}${section}Count`)) * 10));
    let averageCorrectPerQuiz = Math.round((correctAnswers * 10) / (parseInt(localStorage.getItem(`${props.subject}${section}Count`)) * 10));
if(localStorage.getItem(`${props.subject}${section}`)){


    return (

        <div className="summary-panel__content">
            <div className="summary-info">
                <p className="summary-info__heading">
                    Section : <span>{section}</span>
                </p>
                <p className='summary-info__number-of-quizzes'>Number of quizzes : <span>{numberOfQuizzes}</span></p>
                <ReactMinimalPieChart
                    className='summary-info__chart'
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    cx={50}
                    cy={50}
                    data={[
                        {
                            color: '#8de352',
                            title: 'One',
                            value: correctAnswers,

                        },
                        {
                            color: '#C13C37',
                            title: 'Two',
                            value: incorrectAnswers,
                        },
                    ]}
                    label
                    labelPosition={50}
                    lengthAngle={360}
                    lineWidth={15}
                    paddingAngle={0}
                    radius={50}
                    rounded={false}
                    startAngle={0}
                    viewBoxSize={[
                        100,
                        100
                    ]}
                />


                <div className="summary-info__legend">
                    <p className="summary-info__legend--color incorrect"><span/> - incorrect</p>
                    <p className="summary-info__legend--color correct"><span/> - correct</p>
                </div>
                <div className="summary-info__data">
                    <p className="summary-info__data--percent">
                        percentage of correct answers : <br/> <span>{percentOfCorrect}%</span>
                    </p>
                    <p className="summary-info__data-average">
                        average number of correct answers per quiz : <br/> <span>{averageCorrectPerQuiz}</span>
                    </p>
                </div>
            </div>


        </div>


    );
}else return null



};