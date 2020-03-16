import React, {Component} from 'react';
import {QuizGameSummaryQuestion} from "./QuizGameSummaryQuestion";

export default class QuizGameSummary extends Component {
    state = {
        questionPanel: false,
        questionNumber: null,
        questionAnswer: null,
        score: null
    };
    handleExitQuestion = () => {
        this.setState({
            questionPanel: false
        })
    };
    setQuestionPanel = (e) => {
        e.stopPropagation();
        console.log(e.target);
        this.setState({
            questionPanel: true,
            questionNumber: e.target.previousElementSibling.dataset.index,
            questionAnswer: e.target.previousElementSibling.dataset.answer
        });
    };
    setSummary = () => {
        let score = 0;
        if (this.props.quizInfo.length === 10) {
            for (let el of this.props.quizInfo) {
                if (el === 'correct') {
                    score++
                }
            }
            if (!this.state.score) {
                this.setState({
                    score: score
                });
            }
            return score;
        }
    };
    handleQuit = () => {
        this.props.setSection("");
        this.props.setSubject("");
        if (localStorage.getItem(`${this.props.subject}${this.props.section}`)) {
            let correctAnswers = parseInt(localStorage.getItem(`${this.props.subject}${this.props.section}`)) + this.state.score;
            localStorage.setItem(`${this.props.subject}${this.props.section}`, `${correctAnswers}`)
        } else {
            localStorage.setItem(`${this.props.subject}${this.props.section}`, `${this.state.score}`)
        }
        if (localStorage.getItem(`${this.props.subject}${this.props.section}Count`)) {
            let iterator = parseInt(localStorage.getItem(`${this.props.subject}${this.props.section}Count`)) + 1;
            localStorage.setItem(`${this.props.subject}${this.props.section}Count`, `${iterator}`)
        } else {
            localStorage.setItem(`${this.props.subject}${this.props.section}Count`, `1`)
        }
        let existing = localStorage.getItem('AvailableSummaries');
        if (existing) {
            if (existing.split(',').indexOf(`${this.props.subject}`) === -1) {
                existing = existing ? existing.split(',') : [];
                existing.push(`${this.props.subject}`);
                localStorage.setItem('AvailableSummaries', existing.toString());
            }
        } else {
            existing = existing ? existing.split(',') : [];
            existing.push(`${this.props.subject}`);
            localStorage.setItem('AvailableSummaries', existing.toString());
        }
    };
    isCorrect = (value) => {
        if (value === this.state.questionAnswer.trim()) {
            return "incorrect"
        } else if (value === this.props.quizData[this.state.questionNumber].correct_answer) {
            return "correct"
        }
    };

    render() {
        return (
            <div className="quiz-game">

                <div className="quiz-game__summary">
                    <div className="quiz-game__summary-container">
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
                    {
                        this.state.questionPanel ? (
                            <div className="quiz-game__summary-question-container">
                                <QuizGameSummaryQuestion handleExitQuestion={this.handleExitQuestion}
                                                         quizData={this.props.quizData}
                                                         questionNumber={this.state.questionNumber}
                                                         setAnswers={this.props.setAnswers}
                                                         isCorrect={this.isCorrect}
                                                         isActive={this.state.questionPanel ? 'active' : ''}/>
                            </div>
                        ) : null
                    }
                    <button onClick={this.handleQuit} className="quiz-game__summary-btn">Quit</button>
                </div>
            </div>
        );
    }
}






