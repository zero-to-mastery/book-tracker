var button = document.getElementById("record");
var authorInput = document.getElementById("inputAuthor");
var titleInput = document.getElementById("inputTitle");
var startDateInput = document.getElementById("inputStartDate");
var finishedDateInput = document.getElementById("inputFinishedDate");
var progressInput = document.getElementById("inputProgress");
var table = document.querySelector("table");
var clearButton = document.getElementById("clearbutton");
var inputs = [titleInput, authorInput, startDateInput, finishedDateInput, progressInput];

const inputLength = (input => input.value.length);
const createcell = (element) => {
    for (input of inputs) {
        switch (input) {
            case (authorInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(authorInput.value))
                element.appendChild(td);
                break;
            case (titleInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(titleInput.value))
                element.appendChild(td);
                break;
            case (startDateInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(startDateInput.value))
                element.appendChild(td);
                break;
            case (finishedDateInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(finishedDateInput.value))
                element.appendChild(td);
                break;
            case (progressInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(progressInput.value + "%"));
                td.style.cssText = "position: relative; width: 264.2";
                
                var progress = document.createElement("div");
                progress.style.cssText = "background-color: deepskyblue; height: 8px;";
                progress.style.width = (progressInput.value/100) * 264.2;
                td.appendChild(progress);

                element.appendChild(td);
                break;
            default:
                alert(`${input} missing!`)
                break;
        }
    }
    let del = document.createElement("button");
    del.appendChild(document.createTextNode("Remove"));
    del.classList.add("deleteBtn");
    del.onclick = removeParent;
    element.appendChild(del);
    return element
}

const removeParent = (delBtn) => {
    delBtn.target.parentNode.remove();
}

const clearInputs = () => {
    authorInput.value = "";
    titleInput.value = "";
    progressInput.value = "";
}
const addItem = () => {
    var tr = document.createElement("tr");
    tr = createcell(tr);
    table.appendChild(tr);
    clearInputs();
}
const addItemAfterClick = () => {
    if (inputLengthCheck(inputs)) {
        addItem();
    }
}

const addItemAfterEnter = () => {
    if (inputLengthCheck(inputs) && event.keyCode == 13) {
        addItem();
    }
}

const inputLengthCheck = (array) => {
    let checkArray = array.filter((value) => inputLength(value) < 1);
    return (checkArray.length > 0 ? false : true)
}

button.addEventListener("click", addItemAfterClick);
inputProgress.addEventListener("keypress", addItemAfterEnter);