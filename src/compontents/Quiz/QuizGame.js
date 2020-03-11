import React, {useState} from 'react';

export const QuizGame = () => {


    return (
        <div className="quiz-game">
            <div className="quiz-game__question">
                <p className='question__content'>
                    Czy jestem spoko ziomkiem siemaaaaaaaaaa Rozmownie czy nie o cossssssssss sssssssssss sssssss
                    sssssss ssss chodzi w tym ? ?
                </p>
            </div>
            <div className="quiz-game__answers">
                <div className="answer">
                    <div className="answer__container">
                        <p className="answer__content">
                            Poprawna
                        </p>
                    </div>
                </div>
                <div className="answer">
                    <div className="answer__container">
                        <p className="answer__content">
                            Poprawna
                        </p>
                    </div>
                </div>
                <div className="answer">
                    <div className="answer__container">
                        <p className="answer__content">
                            Poprawna
                        </p>
                    </div>
                </div>
                <div className="answer">
                    <div className="answer__container">
                        <p className="answer__content">
                            Poprawna
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



