// 1.
for(let i=0; i<10; i++){
    console.log(i)
}

// 2.
for(let i=111; i<134; i++){
    console.log(i)
}

// 3.
for(let i=20; i>14; i--){
    console.log(i)
}

// 4.
for(let i=50; i>=0; i-=5){
    console.log(i)
}

// 5.
for(let i=1; i<=128; i*=2){
    console.log(i)
}

// 6. Skapa lista och lägg till border
const ol = document.createElement('ol');
document.body.append(ol);

for (let i=0; i<10; i++) {
    const li = document.createElement('li');
    ol.append(li);
    li.innerText = `List`;
}

const items = document.querySelectorAll('ol li');
items.forEach((li, i) => {
    const brdr = i + 1; 
    li.style.border = `${brdr}px solid #ff00ff`;
});



// 7. h1
for (let i=0; i<20; i++) {
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = `Head`;

    const clr = 255 - (i * (255 / 19));
    h1.style.backgroundColor = `rgb(${clr}, ${clr}, ${clr})`;
}

const head = document.querySelectorAll('h1');

head.forEach((h1, i) => {
    const clr = (i / (20 - 1)) * 255;
    h1.style.color = `rgb(${clr}, ${clr}, ${clr})`;
});