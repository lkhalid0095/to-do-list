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
        newLi.setAttribute('class', 'list-item')
        let check = document.createElement("input")
        check.type = "checkbox"
        check.onclick = function () {
            if (check.checked) {
                newLi.style.textDecoration = "line-through"
                // console.log("striked")
            } else if (!check.checked) {
                newLi.style.textDecoration = "none"
            }

        }
        newLi.appendChild(check)
        newLi.appendChild(document.createTextNode(input.value)) //adds the user input to the list
        listItem.appendChild(newLi)
        let date = document.createElement("input")
        date.type = "date"
        date.setAttribute('class', 'date')
        newLi.appendChild(date)
        let important = document.createElement("select")
        var high = document.createElement("option");
        high.value = "high";
        high.text = "High Priority";
        high.setAttribute('class','high')
        var medium = document.createElement("option");
        medium.text = "Medium Priority";
        high.setAttribute('class','med')
        var low = document.createElement("option");
        low.text = "Low Priority";
        high.setAttribute('class','low')
        important.add(high)
        important.add(medium)
        important.add(low)
        newLi.appendChild(important)
        var deleteButton = document.createElement("button"); //creates a button for delete
        deleteButton.setAttribute('class', 'delete')
        deleteButton.innerHTML = '<img src = "del.png" height="50%" width="40%" />'
        // deleteButton.appendChild(document.createTextNode("Delete"));
        newLi.appendChild(deleteButton);
        input.value = "" //for the next input
        // Delete a li item on click
        deleteButton.onclick = function () {
            newLi.parentNode.removeChild(newLi);
        }
    }

    function strike(check, input) {
        if (check.checked) {
            document.write(input.value.strike());
            console.log("striked")
        }
        console.log(check.checked)
    }


}
