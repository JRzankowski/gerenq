import React, {Component} from 'react';

export default class SmallAccountBox extends Component {
    render() {
        return (
            <div className="account-box">
                <p className="account-box__email"> {this.props.userEmail}</p>
                <button className="account-box__log-out">Log out</button>
            </div>
        );
    }
}