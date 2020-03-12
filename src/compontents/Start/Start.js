import React, {useState} from 'react';

const Start = () => {
    const [userName, setUserName] = useState("John");
    return (
        <div className="start-panel">
            <div className="start-panel__container">
                <div className="start-panel__heading">
                    <p className="start-panel__heading--text">Hello, <span className="user-name">{userName}</span> !</p>
                </div>
                <div className="start-panel__content">
                </div>
            </div>
        </div>
    );
};

export default Start;

