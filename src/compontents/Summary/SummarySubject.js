import React from 'react';

export const SummarySubject = (props) => {
    let subjects = [];
    if (localStorage.getItem('AvailableSummaries')) {
        subjects = (localStorage.getItem('AvailableSummaries')).split(',');
        return (
            <div className="summary-panel">
                <div className="summary-panel__container">
                    <div className="summary-panel__heading">
                        <p className="summary-panel__heading--text">Available summaries</p>
                    </div>
                    <div className="summary-panel__content">
                        {
                            subjects.map((value, index) => {
                                return (
                                    <>
                                        <div className="summary-panel__subject">
                                            <button key={index} onClick={() => props.setSubject(value)}>{value}</button>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    } else return (
        <div className="summary-panel">
            <div className="summary-panel__container">
                <div className="summary-panel__heading">
                    <p className="summary-panel__heading--text">Available summaries</p>
                </div>
                <div className="summary-panel__content">
                    <p className="summary-panel__content--error">
                        You haven't completed any of the quizzes !
                    </p>
                </div>
            </div>
        </div>
    )
};