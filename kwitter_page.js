//YOUR FIRE BASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyDn-LZ4IKVYnoTa5i3Nv4kvWzxT8euEed4",
  authDomain: "kwitter-ab89d.firebaseapp.com",
  databaseURL: "https://kwitter-ab89d-default-rtdb.firebaseio.com",
  projectId: "kwitter-ab89d",
  storageBucket: "kwitter-ab89d.appspot.com",
  messagingSenderId: "949790248199",
  appId: "1:949790248199:web:9adfd9d0a478bd07bb49a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        
//End code
      } });  }); }
getData();

