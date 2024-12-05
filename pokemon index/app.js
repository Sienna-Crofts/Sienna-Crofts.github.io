console.log("HELLO");

const container = document.getElementById("container");

console.log(container.innerText);



for (let i = 1; i <= 1302; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(newImg);
}