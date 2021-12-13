  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD-XwVjDOcqJGyI2TgtkxWmx501hry-DjI",
  authDomain: "imms-authentication-log.firebaseapp.com",
  projectId: "imms-authentication-log",
  storageBucket: "imms-authentication-log.appspot.com",
  messagingSenderId: "30975160231",
  appId: "1:30975160231:web:6988aa4028ee43a09a1082",
  measurementId: "G-915S0TVGTL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
  
 

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
      window.location.href= "IMMS-student.html"; 
    }else{
      alert("No enrolled user found so please login{only aviable for enrolled users}")
    }
  })
