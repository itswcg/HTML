var myHeadingContent = document.querySelector('h1').textContent
// myHeading.textContent = 'Hello, world';
if (myHeadingContent === "I am Wcg") {
    alert("I am Wcg");
} else {
    alert('hello, world');
}

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/avatar.jpeg') {
        myImage.setAttribute('src', 'images/avatar1.jpg');
    } else {
        myImage.setAttribute('src', 'images/avatar.jpeg')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello,' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
