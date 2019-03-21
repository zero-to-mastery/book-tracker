var button = document.getElementById("record");
var authorInput = document.getElementById("inputAuthor");
var titleInput = document.getElementById("inputTitle");
var progressInput = document.getElementById("inputProgress");
var table = document.querySelector("table");
var clearButton = document.getElementById("clearbutton");
var inputs =[titleInput,authorInput,progressInput];

const inputLength = (input => input.value.length); 
const createcell = (element) =>{
    for (input of inputs){
        switch (input){
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
            case (progressInput):
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(progressInput.value))
                element.appendChild(td);
                break;
            default:
                alert(`${input} missing!`)
                break;
        }
    }
    return element
}
const clearInputs = () => {
	authorInput.value="";
	titleInput.value="";
	progressInput.value="";
}
const addItem = () => {
    var tr = document.createElement("tr");
    tr = createcell(tr);
	table.appendChild(tr);
	clearInputs();
}
const addItemAfterClick = () => {
    if (inputLength(authorInput) > 0 && inputLength(titleInput) > 0 && inputLength(progressInput) > 0){
        addItem();
    }
}

button.addEventListener("click", addItemAfterClick);