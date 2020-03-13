import React, {useState} from 'react';
import {QuizSubjects} from "./QuizSubject";
import {QuizSection} from "./QuizSection";
import QuizGame from "./QuizGame";

export const Quiz = () => {
    const [subject, setSubject] = useState("");
    const [section, setSection] = useState("");
    if (subject && section) {
        return (
            <QuizGame subject={subject} section={section} setSubject={setSubject} setSection={setSection}/>
        )
    } else {
        return (
            <div className="quiz-panel">
                {subject === "" ? (
                    <QuizSubjects setSubject={setSubject}/>
                ) : (
                    <QuizSection subject={subject} setSubject={setSubject} setSection={setSection}/>
                )}
            </div>
        );
    }
};



