import React, {Component, useState} from 'react';
import {TiArrowForward} from 'react-icons/ti'
import QuizGameQuestion from "./QuizGameQuestion";

export default class QuizGameSummary extends Component {
    state = {
        questionPanel: false,
        questionNumber: null,
        questionAnswer: null,
    };
    handleExitQuestion = () => {
        this.setState({
            questionPanel: false
        })
    };
    setQuestionPanel = (e) => {
        e.stopPropagation();
        console.log(e.target)
        this.setState({
            questionPanel: !this.state.questionPanel,
            questionNumber: e.target.previousElementSibling.dataset.index,
            questionAnswer: e.target.previousElementSibling.dataset.answer
        })
    };
    setSummary = () => {
        let score = 0;
        if (this.props.quizInfo.length === 10) {
            for (let el of this.props.quizInfo) {
                if (el === 'correct') {
                    score++
                }
            }
            return score;
        }
    };


    render() {
        const {answer} = this.props;
        return (
            <div className="quiz-game">
                {!this.state.questionPanel ? (
                    <div className="quiz-game__summary">
                        <h3 className="summary__heading">Summary</h3>
                        <p className='summary__score'>Your score: <span>
                            {this.setSummary()}/10
                        </span></p>
                        {
                            this.props.quizInfo.map((value, index) => {
                                return (
                                    <div className="summary__question-check">
                                        <p>Question {index + 1} : <span data-index={index}
                                                                        data-answer={value.replace("incorrect", "")}
                                                                        className={`summary__question--${value !== "correct" ? "incorrect" : "correct"}`}>{value !== "correct" ? "incorrect" : "correct"}</span>{value === "correct" ? null :
                                            <span onClick={this.setQuestionPanel}>+</span>}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <>
                        <div className="quiz-game__summary-question">
                            <span onClick={this.handleExitQuestion} className="question__back">X</span>
                            <p className='summary__question'>
                                {this.props.quizData[this.state.questionNumber].question}
                            </p>
                        </div>
                        <div className="summary__answers">
                            <div data-answer={this.props.quizData[this.state.questionNumber].incorrect_answers[0]}
                                 className={`summary__answer ${this.props.quizData[this.state.questionNumber].incorrect_answers[0] === this.state.questionAnswer.trim() ? 'incorrect' : null}`}>
                                {this.props.quizData[this.state.questionNumber].incorrect_answers[0]}
                            </div>
                            <div data-answer={this.props.quizData[this.state.questionNumber].incorrect_answers[1]}
                                 className={`summary__answer ${this.props.quizData[this.state.questionNumber].incorrect_answers[1] === this.state.questionAnswer.trim() ? 'incorrect' : null}`}>
                                {this.props.quizData[this.state.questionNumber].incorrect_answers[1]}
                            </div>
                            <div data-answer={this.props.quizData[this.state.questionNumber].incorrect_answers[2]}
                                 className={`summary__answer ${this.props.quizData[this.state.questionNumber].incorrect_answers[2] === this.state.questionAnswer.trim() ? 'incorrect' : null}`}>
                                {this.props.quizData[this.state.questionNumber].incorrect_answers[2]}
                            </div>
                            <div data-answer={this.props.quizData[this.state.questionNumber].correct_answer}
                                 className="summary__answer correct">
                                {this.props.quizData[this.state.questionNumber].correct_answer}
                            </div>
                        </div>
                    </>

                )
                }
            </div>
        );
    }
}






