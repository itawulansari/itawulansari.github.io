// var firebaseConfig = {
//   apiKey: "AIzaSyCVDKUr-9K59mDn8s4RRgIs-8ihQDOpp68",
//   authDomain: "vreegout.firebaseapp.com",
//   databaseURL: "https://vreegout.firebaseio.com",
//   projectId: "vreegout",
//   storageBucket: "vreegout.appspot.com",
//   messagingSenderId: "720147793330",
//   appId: "1:720147793330:web:30174682c9f5cbf836d0ab",
//   measurementId: "G-K5EZ07NC7H"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const database = firebase.database();

// // function signUp(){
// //   var email = document.getElementById("email");
// //   var password = document.getElementById("password");

// //   const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
// //   promise.catch(e => alert(e.message));
// //   alert("Sign Up");
// // }

// function signIn(){
//   var email = document.getElementById("email").value;
//   var password = CryptoJS.MD5(document.getElementById("password").value).toString();

//   if (email=="" || password =="") {
//     alert("Email dan Password salah");
//     return;
//   }

//   auth.signInWithEmailAndPassword(email, password)
//   .then(function (authData){
//   })
//   .catch(function(error){
//     alert(error.message);
//   })

  

//   // const promise = auth.signInWithEmailAndPassword(email.value, password.value);
//   // promise.catch(e => alert(e.message));
//   // alert("Sign In" + email);
// }

// function signOut(){
//   auth.signOut()
//       .then(function(){
//         location.href = "login.php";
//       })
//       .catch(function(error){
//         alert(error.message);
//       })

// }

// // auth.onAuthStateChanged(function(user){
// //   if (user) {
// //     var email = user.email;
// //     alert("Active User" + email);

// //   }else{
// //     alert("No Activ User");
// //   }
  

// // })