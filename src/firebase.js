import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
        apiKey: "AIzaSyCtqRUiiuSfk94dDUQrPrvzY44gTX2AtIw",
        authDomain: "clone-12862.firebaseapp.com",
        databaseURL: "https://clone-12862.firebaseio.com",
        projectId: "clone-12862",
        storageBucket: "clone-12862.appspot.com",
        messagingSenderId: "861654589037",
        appId: "1:861654589037:web:2ca5379f0bea68ec482964",
        measurementId: "G-W9E543W7TT"
      
});


const auth = firebase.auth();

export { auth };