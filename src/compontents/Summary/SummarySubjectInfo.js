import React, {useState} from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import {SummaryBox} from "./SummaryBox";

export const SummarySubjectInfo = (props) => {
    const [sections, setSections] = useState(["Easy", "Medium", "Hard"]);


    return (
        <div className="summary-panel summary-panel__info">
            <div className="summary-panel__container">
                <div className="summary-panel__heading">
                    <p className="summary-panel__heading--text">{props.subject}</p>
                </div>
                {
                    sections.map((value, index) => {

                        return (
                            <>
                                <SummaryBox subject={props.subject}
                                            section={value}
                                            numberOfQuizzes={parseInt(localStorage.getItem(`${props.subject}${value}Count`))}
                                />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )


};