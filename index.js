// called when you click on add
function add() {

    // gets user input from the input
    let input = document.getElementById("userInput")
    let listItem = document.getElementById("list_item")
    if (input.value == "") {
        alert("Please enter a task before adding")
    }
    else {
        let newLi = document.createElement("ul"); //creates elements
        let check = document.createElement("input")
        check.type = "checkbox"
        check.onclick = function (){
            if(check.checked){
                newLi.style.textDecoration = "line-through"
                // console.log("striked")
            } else if (!check.checked){
                newLi.style.textDecoration = "none"
            }
            
        }
        newLi.appendChild(check)

        newLi.appendChild(document.createTextNode(input.value)) //adds the user input to the list
        listItem.appendChild(newLi)
        var deleteButton = document.createElement("button"); //creates a button for delete
        deleteButton.appendChild(document.createTextNode("Delete"));
        newLi.appendChild(deleteButton);
        input.value = "" //for the next input
        // Delete a li item on click
        deleteButton.onclick = function () {
            newLi.parentNode.removeChild(newLi);
        }
    }

function strike(check,input){
    if(check.checked){
        document.write(input.value.strike());
        console.log("striked")
    }
    console.log(check.checked)
}


}
