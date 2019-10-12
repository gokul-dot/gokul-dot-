
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyAXQ5MUfKu9_7njg_7pdmQRSdi712O74oM",
  authDomain: "login-2c7d2.firebaseapp.com",
  databaseURL: "https://login-2c7d2.firebaseio.com",
  projectId: "login-2c7d2",
  storageBucket: "login-2c7d2.appspot.com",
  messagingSenderId: "625991158587",
  appId: "1:625991158587:web:6cdf7a52604b87dc"
};
firebase.initializeApp(firebaseConfig);
export default firebase;