import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAN8IWfrvH-wevdp7UDTWyr1TKptzQbhg4",
    authDomain: "mychatapp-df7af.firebaseapp.com",
    databaseURL: "https://mychatapp-df7af.firebaseio.com",
    projectId: "mychatapp-df7af",
    storageBucket: "mychatapp-df7af.appspot.com",
    messagingSenderId: "172342600676",
    appId: "1:172342600676:web:8d0254a223c659f8109df1"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();