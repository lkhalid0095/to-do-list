// called when you click on add
function add() {

    // gets user input from the input
    let input = document.getElementById("userInput")
    let listItem = document.getElementById("list_item")
    if (input.value == "") {
        alert("Please enter a task before adding")
    } else {
        let newLi = document.createElement("ul"); //creates elements
        newLi.setAttribute('class', 'list-item')
        let priority = document.getElementById("priority")
        let value = priority.options[priority.selectedIndex].value;
        if(value == ""){
            newLi.style.color = "black";
        }
        else if(value == "high"){
            newLi.style.color = "red";
        }
        else if(value == "medium"){
            newLi.style.color = "yellow";
        }
        else if(value == "low"){
            newLi.style.color = "blue";
        }
        let check = document.createElement("input")
        check.type = "checkbox"
        check.onclick = function () {
            if (check.checked) {
                var audio = new Audio('audio.mp3');
                newLi.style.textDecoration = "line-through"
                audio.play();
                // alert("Congratulations on completing the task!")
                //decided against using alert because its annoying everytime you click on complete
                // console.log("striked")
            } else if (!check.checked) {
                newLi.style.textDecoration = "none"
            }

        }

        newLi.appendChild(check)
        newLi.appendChild(document.createTextNode(input.value)) //adds the user input to the list
        listItem.appendChild(newLi)
        let date = document.getElementById("date")
        let due = document.createElement("p")
        let text = document.createTextNode("");
        if(date.value != ""){
            
            text = document.createTextNode("Due date is " + date.value);
        }
        due.appendChild(text)
        due.setAttribute('class', 'date')
        newLi.appendChild(due)
        var deleteButton = document.createElement("button"); //creates a button for delete
        deleteButton.setAttribute('class', 'delete')
        deleteButton.innerHTML = '<img src = "del.png" height="40%" width="40%" />'
        // deleteButton.appendChild(document.createTextNode("Delete"));
        newLi.appendChild(deleteButton);
        input.value = "" //for the next input
        // Delete a li item on click
        deleteButton.onclick = function () {
            newLi.parentNode.removeChild(newLi);
        }
    }
}