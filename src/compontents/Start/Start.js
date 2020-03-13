import React from 'react';

const Start = (props) => {
const {userEmail} = props;
    return (
        <div className="start-panel">
            <div className="start-panel__container">
                <div className="start-panel__heading">
                    <p className="start-panel__heading--text">Hello, <span className="user-name">{userEmail}</span> !</p>
                </div>
                <div className="start-panel__content">
                </div>
            </div>
        </div>
    );
};

export default Start;

