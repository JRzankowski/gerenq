import React, {Component} from 'react';

export default class Start extends Component {
    state={
        userName : 'userName'
    };
    render() {

        return (
            <div className="start-panel">
                <div className="start-panel__container">
                    <div className="start-panel__item start-panel__item--entry">
                        <p className="panel-item__text panel-item__text--heading">Cześć, <span className="user-name">{this.state.userName}</span>!</p>
                    </div>
                    <div className="start-panel__item start-panel__item--news">
                    </div>
                </div>
            </div>
        );
    }

}
