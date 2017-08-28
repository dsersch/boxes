console.log("Javascript has loaded...");

function sayHello(name){
    return "Hello " + (name || "anonymous person");
}

function setGreeting(string) {
    var h1 = document.querySelector("#greeting");
    h1.innerText = string;
}

function showGreeting () {
    setGreeting(sayHello("Dave"));
}

var button = document.querySelector("button");

button.addEventListener('click', function() {
    setGreeting(sayHello("banana"));
});