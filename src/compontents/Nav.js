import React, {Component} from 'react';
import logo from '../assets/logo.png'
import NavItem from './NavItem'


export default class Nav extends Component {
    state = {
        activeItem: 'Start'
    };
    componentWillMount() {
        document.addEventListener("mousedown", this.handleClickOutside, false)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside, false)
    }
    handleClickOutside = (e) => {
        if (this.node.contains(e.target)) {
        } else if(document.querySelector('.nav-container').classList.contains('active')) {
            document.querySelector('.nav-container').classList.remove('active');
            document.querySelector('.main-panel').classList.remove('darker')
        }
    };
    isActive = (itemName)=>{
        this.setState({
            activeItem : itemName
        })
    };


    render() {
        return (
            <>
                <div className="nav-container" ref={node => this.node = node}>
                    <nav className='nav'>
                        <div className="nav__logo">
                            <div className="logo__container">
                                <img alt='logo gerenq' className='logo__container--img' src={logo}/>
                            </div>
                        </div>
                        <NavItem itemName='Start' activeItem={this.state.activeItem} isActive={this.isActive}/>
                        <NavItem itemName='Quiz' activeItem={this.state.activeItem} isActive={this.isActive}/>
                        <NavItem itemName='Wyniki' activeItem={this.state.activeItem} isActive={this.isActive}/>
                        <NavItem itemName='Opcje' activeItem={this.state.activeItem} isActive={this.isActive}/>
                        <NavItem itemName='Lorem' activeItem={this.state.activeItem} isActive={this.isActive}/>
                        <NavItem itemName='Lorem1' activeItem={this.state.activeItem} isActive={this.isActive}/>
                    </nav>
                </div>

            </>
        );
    }

}

