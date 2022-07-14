import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"


function StartFirebase(){
    const firebaseConfig = {
        apiKey: "AIzaSyA3AONfVhdOSx2SlAEwDmKXjnX5gsMNlLs",
        authDomain: "ios-ewd-react.firebaseapp.com",
        databaseURL: "https://ios-ewd-react-default-rtdb.firebaseio.com",
        projectId: "ios-ewd-react",
        storageBucket: "ios-ewd-react.appspot.com",
        messagingSenderId: "759164221894",
        appId: "1:759164221894:web:623e00bb074ff9b5c11ac7",
        measurementId: "G-WZYR1F6HZ5"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    return database
}

export default StartFirebase;