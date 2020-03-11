import React, {useState} from 'react';
import Nav from './Nav'
import Start from "./Start/Start";
import {Quiz} from "./Quiz/Quiz";
import SmallAccountBox from "./smallAccountBox";
import {IoIosMenu} from 'react-icons/io'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export const MainPanel =()=> {
    const [userEmail,setUserEmail] = useState("userEmail");
    const handleActiveMenu = () => {
        document.querySelector('.nav-container').classList.add('active');
        document.querySelector('.main-panel').classList.add('darker')
    };

        return (
            <Router>
                <div className="main-view">
                    <SmallAccountBox userEmail={userEmail}/>
                    <Nav/>
                    <div onClick={handleActiveMenu} className="nav-burger">
                        <IoIosMenu/>
                    </div>
                    <div className="main-panel">

                        <Route exact path='/Start'>
                            <Start/>
                        </Route>
                        <Route path='/Quiz'>
                            <Quiz/>
                        </Route>

                    </div>
                </div>
            </Router>
        );
};