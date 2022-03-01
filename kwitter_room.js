
var firebaseConfig = {
      apiKey: "AIzaSyALfZnSpuEVHmpbIhALY8VC6-VsVT-srIg",
  authDomain: "kwitter-app-f6c41.firebaseapp.com",
  databaseURL: "https://kwitter-app-f6c41-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-f6c41",
  storageBucket: "kwitter-app-f6c41.appspot.com",
  messagingSenderId: "667907213323",
  appId: "1:667907213323:web:63f3b3a40ffee211a31f0e"
    };
    firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username")
document.getElementById("welcome").innerHTML="Welcome, "+username+"!"
function addroom(){

      roomname=document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"addingroomname"
      })
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
  }
  function logout(){
        window.location="index.html"
        localStorage.removeItem("username")
        localStorage.removeItem("roomname")
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key; Room_names = childKey; 
      //Start code
console.log(Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
 });});}
 getData()
 function redirectToRoomName(name){
       console.log(name)
       localStorage.setItem("room_name",name)
       window.location="kwitter_page.html"
 }