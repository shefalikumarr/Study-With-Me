(function(){

  const config = {
    apiKey: "AIzaSyAs7S6FmloEdGYJ9fK_psPxdQU8b-ZAvi4",
    authDomain: "study-with-me-287801.firebaseapp.com",
    databaseURL: "https://study-with-me-287801.firebaseio.com",
    storageBucket: "study-with-me-287801.appspot.com",
  };
  firebase.initializeApp(config);

  // const preObject = document.getElementById('Students');
  // const uList = document.getElementById('list');
  //
  // const dbRefObject = firebase.database().ref().child('Students');
  // const dbRefList = dbRefObject.child('ej10000');
  var db = firebase.database();

  const preObject = document.getElementById('object');
  const ulList = document.getElementById('list');

  const dbRefObject = firebase.database().ref().child('object');

  const dbRefList = dbRefObject.child('m1111');
  // dbRefList.set({
  //   hello: "oh okay",
  //   wow: "hiiii"
  // });


  // dbRefObject.on('value', snap => console.log(snap.val()));
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // dbRefList.on('child_added', snap => console.log(snap.val()));
  dbRefList.on('child_added', snap => {

    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);

  });

  dbRefList.on('child_changed', snap => {

    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();

  });

  dbRefList.on('child_removed', snap => {

    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();

  });

} ());
