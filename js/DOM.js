// DOM manipulation

// console.log(document.getElementById("title"));
// >> <h1 id="title">Lecture</h1>
// Make sure that the script is in the footer, so every html tag has been rendered
// console.log(document instanceof HTMLDocument)
// Means that document is an instance of HTMLDocument

function sayHello () {
    this.textContent = "Said it!";
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>"

    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document
            .querySelector("#title") // Like CSS
            .textContent;

        title += " & Lovin' it";

        document.querySelector("#title").textContent = title;
        // #title can be change to h1

    }
}

// Unobtrusive event binding
document.querySelector("button")
    .addEventListener("click", sayHello);
// You can add the onClick in the html, but you are not supposed to, since it is content only
// One of the perks of doing it like this is since you are calling the function from the button
// Object, you can directly manipulate the content of the button with 'this'

// You can also use
// document.querySelector("button").onclick = sayHello;

// If you want to place your script at the begining of the html, use

document.addEventListener("DOMContentLoaded",
    function (event) {
        
    })

// And place all your functions inside