const firebaseConfig = {
  apiKey: "AIzaSyDsH_9L8NO3qc31QzVoJTDTMokOUsIRS0E",
  authDomain: "lets-chat-web-app-c2eb7.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-c2eb7-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-c2eb7",
  storageBucket: "lets-chat-web-app-c2eb7.appspot.com",
  messagingSenderId: "513745785810",
  appId: "1:513745785810:web:ec8569196e9b52492eee0b"
};

  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
  function addRoom() {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose: "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  } 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
