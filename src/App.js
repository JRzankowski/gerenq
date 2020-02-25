import React, {Component} from 'react';
import logo from './logochuj.png';
import './App.css';
import firebaseConfig from "./config"
import Firebase from "firebase";

class App extends Component {

    render() {
        Firebase.initializeApp(firebaseConfig);
        const db = Firebase.firestore();

        const myPost = db.collection('zwierzeta').doc('treWChZPgTjothNmvUN9');
        myPost.onSnapshot(doc => {
            const data = doc.data();
            console.log(data)
        });

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }

}

export default App;
