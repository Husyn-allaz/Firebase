 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCPe3ZesVJ2fhL6ws6CMmOKOnf40Cu4oV0",
    authDomain: "todo-app-8c9ab.firebaseapp.com",
    databaseURL:"https://todo-app-8c9ab-default-rtdb.firebaseio.com/",
    projectId: "todo-app-8c9ab",
    storageBucket: "todo-app-8c9ab.appspot.com",
    messagingSenderId: "490800491684",
    appId: "1:490800491684:web:de108bf028f1d920e60a31"
  };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig); bu yenidir geleceyde reactda isdifade edecik

  firebase.initializeApp(firebaseConfig)

  let myDatabase = firebase.database()
