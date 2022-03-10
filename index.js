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
        if (value == "") {
            newLi.style.color = "black";
        }
        else if (value == "high") {
            newLi.style.color = "red";
        }
        else if (value == "medium") {
            newLi.style.color = "yellow";
        }
        else if (value == "low") {
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
        if (date.value != "") {

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
function example() {
    let example1 = document.getElementById("example1")
    let listItem = document.getElementById("list_item")
    let check = document.createElement("input")
    check.type = "checkbox"
    example1.appendChild(check)
    example1.appendChild(document.createTextNode("Example 1: Interview People"))
    listItem.appendChild(example1)
        check.onclick = function () {
            if (check.checked) {
                var audio = new Audio('audio.mp3');
                example1.style.textDecoration = "line-through"
                audio.play();
                // alert("Congratulations on completing the task!")
                //decided against using alert because its annoying everytime you click on complete
                // console.log("striked")
            } else if (!check.checked) {
                example1.style.textDecoration = "none"
            }

        }

    var deleteButton = document.createElement("button"); //creates a button for delete
    deleteButton.setAttribute('class', 'delete')
    deleteButton.innerHTML = '<img src = "del.png" height="40%" width="40%" />'
    // deleteButton.appendChild(document.createTextNode("Delete"));
    example1.appendChild(deleteButton);
    // Delete a li item on click
    deleteButton.onclick = function () {
        example1.parentNode.removeChild(example1);
    }
    let example2 = document.getElementById("example2")
    let check2 = document.createElement("input")
    check2.type = "checkbox"
    example2.appendChild(check2)
        check2.onclick = function () {
            if (check2.checked) {
                var audio = new Audio('audio.mp3');
                example2.style.textDecoration = "line-through"
                audio.play();
                // alert("Congratulations on completing the task!")
                //decided against using alert because its annoying everytime you click on complete
                // console.log("striked")
            } else if (!check2.checked) {
                example2.style.textDecoration = "none"
            }

        }
    example2.appendChild(check2)
    example2.appendChild(document.createTextNode("Example 2: Finish Research"))
    listItem.appendChild(example2)
    var deleteButton = document.createElement("button"); //creates a button for delete
    deleteButton.setAttribute('class', 'delete')
    deleteButton.innerHTML = '<img src = "del.png" height="40%" width="40%" />'
    // deleteButton.appendChild(document.createTextNode("Delete"));
    example2.appendChild(deleteButton);
    // Delete a li item on click
    deleteButton.onclick = function () {
        example2.parentNode.removeChild(example2);
    }
}