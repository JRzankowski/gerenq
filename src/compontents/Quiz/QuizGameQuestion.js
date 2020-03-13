import React, {Component, useState} from 'react';


export default class QuizGameQuestion extends Component {


    handleClick = (e) => {
        if (this.props.quizQuestionIterator !== 10) {
            for (let el of document.querySelectorAll('.answer')) {
                if (!el.classList.contains('disable')) {
                    el.classList.add('disable')
                }
            }
            e.persist();
            if (e.target.classList.contains('answer')) {
                if (e.target.dataset.answer === this.props.correctAnswer) {
                    e.target.classList.add('correct')
                } else {
                    e.target.classList.add('incorrect');
                    for (let el of document.querySelectorAll('.answer')) {
                        if (el.dataset.answer === this.props.correctAnswer) {
                            el.classList.add('correct')
                        }
                    }
                }
            }
            window.setTimeout(() => {
                this.props.setQuizInfo(e.target);
                for (let el of document.querySelectorAll('.answer')) {
                    el.classList.remove('disable', 'correct', 'incorrect')
                }
                this.props.setQuestionIterator()
            }, 10)
        }
    };


    render() {
        const {answer} = this.props;
        return (
            <div data-answer={answer} onClick={this.handleClick} className="answer">
                {answer}
            </div>
        );
    }
}






