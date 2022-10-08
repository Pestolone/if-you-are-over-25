let username;

document.getElementById("MyButton").onclick = function(){

    username = document.getElementById("MyText").value;
    console.log(username);
    document.getElementById("MyLabel").innerHTML = "Welcome " + username;
    
}