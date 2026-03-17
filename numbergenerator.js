const container = document.querySelector("#number-container");
let number;

for (let i = 0; i <= 101; i++) {
    number = document.createElement("div");
    number.textContent = i;
    number.className = "number-box";

    if (i % 2 === 0) {
        number.style.backgroundColor = "green";
    }
    if (i % 2 === 1) {
        number.style.backgroundColor = "yellow";
    }
    if (isPrime(i)) {
        number.style.backgroundColor = "red";
    }

    container.append(number);
}

function isPrime(x) {
    if (x === 1 || x === 0) {
        return false;
    }
    let j = 2;
    while (j <= Math.sqrt(x)) {
        if (x % j === 0) {
            return false;
        }
        j++;
    }

    return true;
}