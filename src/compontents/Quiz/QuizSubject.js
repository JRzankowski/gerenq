import React, {useState} from 'react';

export const QuizSubjects = (props) => {
    const [subjects, setSubjects] = useState(["Math", "Geography", "History"]);
    return (
        <div className="quiz-panel__container">
            <div className="quiz-panel__heading">
                <p className="quiz-panel__heading--text">Available subjects</p>
            </div>
            <div className="quiz-panel__content">
                {
                    subjects.map((value, index) => {
                        return (
                            <>
                                <div className="quiz__subject">
                                    <button key={index} onClick={() => props.setSubject(value)}>{value}</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

