import React, {Component} from 'react';
import './scss/main.scss'
import MainPanel from "./compontents/MainPanel";

export default class App extends Component {
    render() {
        // Firebase.initializeApp(firebaseConfig);
        // const db = Firebase.firestore();
        // const myPost = db.collection('zwierzeta').doc('treWChZPgTjothNmvUN9');
        // myPost.onSnapshot(doc => {
        //     const data = doc.data();
        //     console.log(data)
        // });
        return (
            <div className="App">
                <MainPanel/>
            </div>
        );
    }

}

