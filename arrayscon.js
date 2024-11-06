//Övnings uppgifter - Arrays (1-5)

// 1. Deklarera array
const fruits = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Pear', 'Blueberry', 'Cherry'];

// 2. Logga arrayen i konsolen
console.log(fruits);

// 3. For-loop där jag loggar en frukt i taget i konsolen
for(i=0; i<fruits.length; i++){
    console.log(fruits[i])

    // 4. For-loop för att skapa h1 element
    const h1fruits = document.createElement("h1");
    h1fruits.innerText = fruits[i];

    // 5. (Tre istället för två)
    if(fruits[i] === "Strawberry") {
        h1fruits.style.backgroundColor = "red";
    } else if (fruits[i] === "Blueberry") {
        h1fruits.style.backgroundColor = "blue";
    } else if (fruits[i] === "Banana") {
        h1fruits.style.backgroundColor = "yellow" 
    }

    document.body.appendChild(h1fruits);
};


// Nummer (1)
// 1.
const numbers = [25, 50, 75, 100, 125, 185, 190, 250, 300, 360];

for(i=0; i<numbers.length; i++){
    const h2numbers = document.createElement("h2");
    h2numbers.innerText = numbers[i];

    const hue = numbers[i];
    let lightness;
    let textColor;

    if (hue > 180) {
        lightness = 80;
        textColor = 'black';
    } else {
        lightness = 20;
        textColor = 'white';
    }

    h2numbers.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
    h2numbers.style.color = textColor;

    document.body.appendChild(h2numbers);
}

// Varannan
// 1.
const random = ['Stefan', 'Gustav', 'Mario', 'Lennard', 'Bengt', 'Emil', 'Pinne', 'Leo', 'Osama'];

const container = document.createElement("div");
document.body.appendChild(container);

for (let i=0; i<random.length; i++) {
    const h3random = document.createElement("h3");
    h3random.innerText = random[i];

    if (i% 2 === 0) {
        h3random.style.border = "2px solid blue"; 
    } else {
        h3random.style.fontSize = "24px"; 
    }

    container.appendChild(h3random);
}
