//console.log("Hello world");
//alert("Hello world");

const buttonA = document.querySelector("#button_A");
const headingA = document.getElementById("heading_A");

buttonA.addEventListener("click", () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you`);
    headingA.textContent = `Welcome, ${name}`;
});


const textbox = document.getElementById("textBox");
const div = document.getElementById("output");

textbox.addEventListener("keypress", (event) => {
    div.textContent = `You pressed "${event.key}".`;
});

const buttonB = document.getElementById("greetingBtn");
const greetingDiv = document.getElementById("greeting");

buttonB.addEventListener("click", () => {
    const name = prompt("What is your name?");
    greetingDiv.textContent = `Hello! ${name}, nice to see you!`;
});