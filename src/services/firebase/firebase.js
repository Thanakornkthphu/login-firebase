import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8IfBODAD30eTAcw4JybTiCTul6Gp_l_8",
    authDomain: "react-authen-d6e37.firebaseapp.com",
    projectId: "react-authen-d6e37",
    storageBucket: "react-authen-d6e37.appspot.com",
    messagingSenderId: "25014441057",
    appId: "1:25014441057:web:f3295d8410b1669baac620"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
