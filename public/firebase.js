'use strict';

//grab a form
const form = document.querySelector('#emailForm');

//grab an input
const inputEmail = form.querySelector('#email');


//config your firebase push
const firebaseConfig = {
    apiKey: "AIzaSyBKQ3vERVezCVWwVhLeRDg_KOUdZLtJKao",
    authDomain: "ysbc-test.firebaseapp.com",
    databaseURL: "https://ysbc-test-default-rtdb.firebaseio.com",
    projectId: "ysbc-test",
    storageBucket: "ysbc-test.appspot.com",
    messagingSenderId: "570235010538",
    appId: "1:570235010538:web:d06b99210ce9c11bd00693",
    measurementId: "G-KWW7BF0CBN"
  };


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }