import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: 'AIzaSyDPudjtV7mqOiAcdwpjsm56Kci0oCF10TU',
    authDomain: 'diary-e138f.firebaseapp.com',
    databaseURL: 'https://diary-e138f.firebaseio.com',
    projectId: 'diary-e138f',
    storageBucket: '',
    messagingSenderId: '384973323231'
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
