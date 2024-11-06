
const olEl = document.createElement('ol');
document.body.append(olEl);
for(let i=0; i<5; i++){
    const liEl = document.createElement('li');
    olEl.append(liEl);
    liEl.innerText = 5-i;

    const hue = 300;
    const saturation = 100;
    const lightness = 50;
    liEl.style.color = `hsl(${hue}, ${saturation}%, ${lightness}% `;  
}


const animal = 'hund';
const name = 'dawg';

const sentence = `min ${animal} heter ${name}`
console.log(sentence)



for(let i=0; i<20; i++){
    const newH1 = document.createElement('h1');
    document.body.append(newH1);
    const newHue = 0 + i*20;

    newH1.innerText = `Element ${i+1}`

    newH1.style.backgroundColor = `hsl(${newHue}, 100%, 75%)`;
}

