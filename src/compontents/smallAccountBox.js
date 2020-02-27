import React, {Component} from 'react';
import Nav from './Nav'
import Start from "./Start";
import { FaBeer } from 'react-icons/fa'

export default class SmallAccountBox extends Component {

    render() {
        return (
            <div className="account-box">
                <p className="account-box__email"> {this.props.userEmail}</p>
                <button className="account-box__log-out">Wyloguj</button>
            </div>
        );
    }

}