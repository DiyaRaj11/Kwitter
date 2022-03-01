function login(){
    window.location="kwitter_room.html"
    username=document.getElementById("username").value
    localStorage.setItem("username",username)
}