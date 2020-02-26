import React, {Component} from 'react';

import Main from "./compontents/Main";

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
          <Main/>
            </div>
        );
    }

}

