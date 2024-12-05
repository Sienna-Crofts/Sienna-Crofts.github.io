

const BobsContainer = document.getElementById("bobinarob");
console.log(BobsContainer)
let switchbober = false;

function mario() {
    if (switchbober) {
        BobsContainer.innerHTML = '<h1>why am I like this Mario?</h1> <img id="bober" src="bob_the_builder_cursed.png">';
    }
    else {
        BobsContainer.innerHTML = '<h1>no</h1> <img src="ItsaMeMario.jpg>'
    }
    switchbober = !switchbober;
}