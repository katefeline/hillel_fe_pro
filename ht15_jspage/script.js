window.onload = function() {

    document.body.style.background = 'lightgreen';

    let heading = document.createElement("h1");
    let heading_text = document.createTextNode("Kateryna Shadrina");
    heading.style.backgroundColor = 'pink';
    heading.style.textAlign = 'center';
    heading.appendChild(heading_text);
    document.body.appendChild(heading);

    let paragraph = document.createElement("p");
    let paragraphText = document.createTextNode('Задача: создать страницу с элементами <h1>, <p>, <input> и <button> без использования html, а лишь используя методы объекта window.document. В заголовке <h1> должны быть ваше имя и фамилия, в <p> - текст задания, которое вы сейчас выполняете. В <input> можно что-то ввести, если нажать на кнопку то будет выведен alert c введенным в поле значением и после закрытия alert\'а поле будет очищаться.');
    paragraph.style.textAlign = 'center';
    paragraph.appendChild(paragraphText);
    document.body.appendChild(paragraph);

    let input = document.createElement('input');
    input.id = 'inputId';
    input.placeholder = 'Put some text here';
    input.style.width = "200px";
    document.body.appendChild(input);

    let button = document.createElement('button');
    // button.id = 'buttonId';
    button.style.marginLeft = '25px';
    button.style.width = '100px';
    button.style.height = '100px';
    button.style.background = 'blue';
    button.style.borderRadius = '50%';
    document.body.appendChild(button);

    button.onclick = function buttonClicked () {
        let inputText = document.getElementById('inputId').value;
        alert(inputText);
        input.value = '';
    }
}