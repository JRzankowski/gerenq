import React, {Component} from 'react';
import Nav from './Nav'
import Start from "./Start";
import SmallAccountBox from "./smallAccountBox";
import {IoIosMenu} from 'react-icons/io'

export default class MainPanel extends Component {
    state = {
        userEmail: 'userEmail@gmail.com'
    };
    handleActiveMenu = () => {
        document.querySelector('.nav-container').classList.add('active');
        document.querySelector('.main-panel').classList.add('darker')
    };

    render() {

        return (
            <div className="main-view">
                <SmallAccountBox userEmail={this.state.userEmail}/>
                <Nav/>
                <div onClick={this.handleActiveMenu} className="nav-burger">
                    <IoIosMenu/>
                </div>
                <div className="main-panel">
                    <Start/>
                </div>
            </div>
        );
    }

}