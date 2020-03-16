import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import Nav from './Nav'
import Start from "./Start/Start";
import {Quiz} from "./Quiz/Quiz";
import Summary from "./Summary/Summary";
import SmallAccountBox from "./smallAccountBox";
import {IoIosMenu} from 'react-icons/io'
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

export const MainPanel = () => {
    const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));
    const [entryActive, setEntryActive] = useState(!userEmail);
    const handleActiveMenu = () => {
        document.querySelector('.nav-container').classList.add('active');
        document.querySelector('.main-panel').classList.add('darker')
    };
    const handleEntry = (e) => {
        e.preventDefault();
        if (document.querySelector('.entry__input').value) {
            localStorage.setItem("userEmail", document.querySelector('.entry__input').value);
            setUserEmail(localStorage.getItem("userEmail"));
            setEntryActive(false);
            e.target.parentElement.style.display = "none";
        }
    };
    return (
        <Router>
            {!userEmail ? (
                <div className="main-panel__entry">
                    <form onSubmit={handleEntry}>
                        <label className="entry__label">Your name
                            <input type="text" id="entry__input" className="entry__input"/>
                        </label>
                        <button type='submit' className="entry__submit">Save</button>
                    </form>
                </div>
            ) : null
            }
            <div className={`main-view ${entryActive ? "darker" : ""}`}>
                <SmallAccountBox userEmail={userEmail}/>
                <Nav/>
                <div onClick={handleActiveMenu} className="nav-burger">
                    <IoIosMenu/>
                </div>
                <div className='main-panel'>
                    {userEmail ? <Redirect to='/Start'/> : null}
                    <Route exact path='/Start'>
                        <Start userEmail={userEmail}/>
                    </Route>
                    <Route path='/Quiz'>
                        <Quiz/>
                    </Route>
                    <Route path='/Summary'>
                        <Summary/>
                    </Route>
                </div>
            </div>
        </Router>
    );
};