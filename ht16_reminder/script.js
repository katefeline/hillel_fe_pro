let toDo = document.querySelector('input');

let addToDo = document.getElementById('addBtn');
addToDo.addEventListener('click', function() {
    let newToDo = toDo.value;
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.width = '500px';
    div.style.borderBottom = '1px solid black';
    div.style.padding = '10px 100px 0 0';
    div.style.marginLeft = '80px';
    div.style.justifyContent = 'space-between';
    let paragraph = document.createElement("p");
    paragraph.style.margin = '15px';
    paragraph.style.fontSize = '25px';
    paragraph.style.display = 'flex';
    paragraph.style.justifyContent = 'center';
    paragraph.style.paddingBottom = '15px';
    let paragraphText = document.createTextNode(newToDo[0].toUpperCase() + newToDo.slice(1));
    paragraph.appendChild(paragraphText);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = false;
    document.body.appendChild(div);
    div.appendChild(paragraph);
    div.appendChild(checkbox);
    toDo.value = '';

    checkbox.addEventListener('click', function() {
        if (checkbox.checked === true) {
            paragraph.style.textDecoration = 'line-through';
        } else {
            paragraph.style.textDecoration = 'none';
        }
    });
})
