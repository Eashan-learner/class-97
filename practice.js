const firebaseConfig = {
    apiKey: "AIzaSyBbErVEmhVO9cWJIWfHY-aOn0XmlSitlWQ",
    authDomain: "kwitter-is-not-for-my-age.firebaseapp.com",
    databaseURL: "https://kwitter-is-not-for-my-age-default-rtdb.firebaseio.com",
    projectId: "kwitter-is-not-for-my-age",
    storageBucket: "kwitter-is-not-for-my-age.appspot.com",
    messagingSenderId: "533199618645",
    appId: "1:533199618645:web:3d783a2524c2bdd5e68adc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function clicktoflex() {
    yessir=document.getElementById("inputisflexing").value;
 firebase.database().ref("/").child(yessir).update({purpose:"addinguser"});
}