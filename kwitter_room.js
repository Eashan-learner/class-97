
//ADD YOUR FIREBASE LINKS HERE
/*const firebaseConfig = {
      apiKey: "AIzaSyBbErVEmhVO9cWJIWfHY-aOn0XmlSitlWQ",
      authDomain: "kwitter-is-not-for-my-age.firebaseapp.com",
      databaseURL: "https://kwitter-is-not-for-my-age-default-rtdb.firebaseio.com",
      projectId: "kwitter-is-not-for-my-age",
      storageBucket: "kwitter-is-not-for-my-age.appspot.com",
      messagingSenderId: "533199618645",
      appId: "1:533199618645:web:3d783a2524c2bdd5e68adc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);*/
    var firebaseConfig = {
      apiKey: "AIzaSyANNkz18MxaPTd8BKQz9OS1-W64tHCi89Y",
      authDomain: "kwitterisnice.firebaseapp.com",
      databaseURL: "https://kwitterisnice-default-rtdb.firebaseio.com",
      projectId: "kwitterisnice",
      storageBucket: "kwitterisnice.appspot.com",
      messagingSenderId: "178933724713",
      appId: "1:178933724713:web:adc47d6e61e6fb1a8b0e38"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

sus =localStorage.getItem("oof");
document.getElementById("user_name").innerHTML="welcome "+ sus;
function meiwillsearch(){
plswork = document.getElementById("roomname").value;
firebase.database().ref("/").child(plswork).update({ purpose : "adding room name"});
localStorage.setItem("oof1",plswork);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("oof1", name);
window.location = "kwitter_page.html";
}
function LOGOUT(){
      localStorage.removeItem("oof");
      localStorage.removeItem("oof1");
      window.location = "index.html";

} 
