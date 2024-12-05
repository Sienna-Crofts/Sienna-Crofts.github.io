console.log("EFJIJIEF")

const grabForm = document.getElementById("firstForm")
const grabButton = document.getElementById("submitButton")

grabForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit button has been pressed", event)

    const newRow = document.createElement("tr")
    newRow.innerHTML = `<td>${inputName.value}</td><td>${inputEmail.value}</td>`;
    outputTable.appendChild(newRow)

    inputName.value = "";
    inputEmail.value = "";
})