import React, {Component} from 'react';
import logo from '../assets/logo.png'


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
                    <p className='item-name'>{this.props.itemName} </p>
                </div>
            </div>

        );
    }

}

