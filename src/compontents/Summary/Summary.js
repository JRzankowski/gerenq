import React, {Component, useState} from 'react';
import {SummarySubject} from "./SummarySubject";
import {SummarySubjectInfo} from "./SummarySubjectInfo";


export default class Summary extends Component {
    state = {
        subject: ""
    };
    setSubject = (subject) => {
        this.setState({
            subject: subject
        })
    };

    render() {

        if (!this.state.subject) {
            return (
                <SummarySubject setSubject={this.setSubject}/>
            );
        } else {
            return (
                <SummarySubjectInfo subject={this.state.subject}/>
            )
        }

    }


};



