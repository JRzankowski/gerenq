import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class Nav extends Component {
    state = {
        itemName: this.props.itemName,
        isActive: false
    };
    handleClick = (e) => {
        this.props.isActive(this.state.itemName)

    };
    render() {
        let itemClass = 'nav__item';
        if (this.props.activeItem === this.state.itemName) {
            itemClass = 'nav__item active';
        }

            return (

                <div onClick={this.handleClick} className={`nav__item ${itemClass} `}>
                    <div className="item__container">
                        <Link className='item-name' to={`/${this.state.itemName}`}>{this.props.itemName}</Link>
                    </div>
                </div>

            );
        }


}

