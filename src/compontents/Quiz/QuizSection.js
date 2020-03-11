import React, {useState} from 'react';
import {FaArrowAltCircleLeft } from "react-icons/fa";

export const QuizSection = (props) => {
    const [sections, setSections] = useState(["Easy", "Medium", "Hard"]);
    const handleBack = ()=>{
        if(props.subject.length > 0){
            props.setSubject("")
        }
    };

    return (
        <div className="quiz-panel__container">
            <div className="quiz-panel__heading">
                <p className="quiz-panel__heading--text">Available sections <span  className="quiz-panel__heading--icon"><FaArrowAltCircleLeft onClick={handleBack}/></span></p>
            </div>
            <div className="quiz-panel__content">
                {
                    sections.map((value, index) => {
                        return (
                            <>
                                <div key={index} className="quiz__section">
                                    <button  onClick={() => props.setSection(value)}>{value}</button>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>


    )

};

