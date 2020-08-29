(function() {

  //initialize firebase
  const config = {
    apiKey: "AIzaSyAs7S6FmloEdGYJ9fK_psPxdQU8b-ZAvi4",
    authDomain: "study-with-me-287801.firebaseapp.com",
    databaseURL: "https://study-with-me-287801.firebaseio.com",
    storageBucket: "study-with-me-287801.appspot.com",
    messagingSenderId: "726413645124",
    appId: "1:726413645124:web:d6f1f2d8a0355b9be27311",
    measurementId: "G-Q5JTQ12R4M"
  };
  firebase.initializeApp(config);

  // get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // add login event
  btnLogin.addEventListener('click', e =>{
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  })


}());
