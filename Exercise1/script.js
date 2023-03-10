// function ChangeName() {
//     let userName = prompt("What your name");
//     document.getElementById("inputName").textContent = "Hello " + userName;
// }

function ChangeName() {
    let userName = prompt("What your name");
    if (userName === "" || userName === undefined || userName === null) {
        document.getElementById("inputName").innerHTML = "Please enter your name";
    } else {
        document.getElementById("inputName").innerHTML = "Hello " + userName + " Have a good day!";
    }
}