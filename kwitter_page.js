const firebaseConfig = {
      apiKey: "AIzaSyCtJTp3TwL0KEhZvHkyOttyE5bZN6uziDM",
      authDomain: "class-test-941bf.firebaseapp.com",
      databaseURL: "https://class-test-941bf-default-rtdb.firebaseio.com",
      projectId: "class-test-941bf",
      storageBucket: "class-test-941bf.appspot.com",
      messagingSenderId: "1093504393550",
      appId: "1:1093504393550:web:1e5f262f41b3cd0a8cfe1f"
    };
    
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg, like: 0
      });
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      
      } });  }); }
getData();
