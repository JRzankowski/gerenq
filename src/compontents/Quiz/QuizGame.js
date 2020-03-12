import React, {Component, useEffect, useState} from 'react';
import axios from 'axios'
import QuizGameQuestion from "./QuizGameQuestion";
import QuizGameSummary from "./QuizGameSummary";


export default class QuizGame extends Component {
    state = {
        quizQuestionIterator: 0,
        quizInfo: []
    };
    setQuestionIterator = () => {
        this.setState({
            quizQuestionIterator: this.state.quizQuestionIterator + 1
        })
    };
    setQuizInfo = (e) => {
        this.setState({
            quizInfo: [...this.state.quizInfo, e.dataset.answer === this.state.quizData[this.state.quizQuestionIterator].correct_answer ? "correct" : `incorrect ${e.dataset.answer}`]


        });
    };

    componentDidMount = () => {
        let category = "";
        if (this.props.subject === "Math") {
            category = "19";
        } else if (this.props.subject === "History") {
            category = "23";
        } else if (this.props.subject === "Geography") {
            category = "22";
        }

        axios
            .get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${this.props.section.toLowerCase()}&type=multiple`)
            .then(({data}) => this.setState({quizData: data.results}))
    };

    setAnswers = () => {
        if (this.state.quizData) {
            let answersArray = [...this.state.quizData[this.state.quizQuestionIterator].incorrect_answers];
            answersArray.push(this.state.quizData[this.state.quizQuestionIterator].correct_answer);
            let ctr = answersArray.length, temp, index;
            if (ctr > 0) {
                index = Math.floor(Math.random() * ctr);
                ctr--;
                temp = answersArray[ctr];
                answersArray[ctr] = answersArray[index];
                answersArray[index] = temp;
            }
            return answersArray
        }
    };



    render() {

        const {subject, section} = this.props;
        if (this.state.quizQuestionIterator !== 10) {
            return (
                <div className="quiz-game">
                    <div className="quiz-game__question">
                        <h3 className="question__heading">
                            {subject},{section}, Question {this.state.quizQuestionIterator + 1}/10
                        </h3>
                        <p className='question__content'>
                            {this.state.quizQuestionIterator !== 10 ? this.state.quizData ? this.state.quizData[this.state.quizQuestionIterator].question : null : null}
                        </p>
                    </div>
                    <div className="quiz-game__answers">
                        {this.state.quizData ? (
                            this.setAnswers().map((value, index) => {
                                return (
                                    <QuizGameQuestion setQuestionIterator={this.setQuestionIterator}
                                                      quizQuestionIterator={this.state.quizQuestionIterator}
                                                      setQuizInfo={this.setQuizInfo}
                                                      correctAnswer={this.state.quizData[this.state.quizQuestionIterator].correct_answer}
                                                      key={index} answer={value}/>
                                )
                            })
                        ) : null
                        }
                    </div>
                </div>
            );
        } else {
            return (
               <QuizGameSummary quizInfo={this.state.quizInfo} quizData={this.state.quizData} />
            )
        }

    }

}













