let toDo = document.querySelector('input');

let addToDo = document.getElementById('addBtn');
addToDo.addEventListener('click', function() {
    let newToDo = toDo.value;
    let div = document.createElement('div');
    div.style.display = 'flex';
    let paragraph = document.createElement("p");
    paragraph.style.margin = '15px';
    paragraph.style.fontSize = '25px';
    paragraph.style.display = 'flex';
    paragraph.style.justifyContent = 'center';
    paragraph.style.paddingBottom = '15px';
    paragraph.style.borderBottom = '1px solid black';
    let paragraphText = document.createTextNode(newToDo[0].toUpperCase() + newToDo.slice(1));
    paragraph.appendChild(paragraphText);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = false;
    document.body.appendChild(div);
    div.appendChild(paragraph);
    div.appendChild(checkbox);
    toDo.value = '';

    if (checkbox.checked === true) {
        paragraphText.style.textDecoration = 'line-through';
    }
})
