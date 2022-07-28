import XMLHttpRequest from "xhr2";

//Getting a resource

// let xml = new XMLHttpRequest;
// xml.open("GET", 'https://jsonplaceholder.typicode.com/posts/1');
// xml.send();
//
// xml.onload = function () {
//     if (xml.status != 200) {
//         console.log((`Error ${xml.status}: ${xml.statusText}`));
//         console.log(xml.response);
//     } else {
//         console.log(xml.response);
//     }
// }

//Creating a resource

let xml = new XMLHttpRequest;
let newData = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
})

xml.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xml.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
xml.send(newData);

xml.onload = function () {
    if (xml.status != 200) {
        console.log((`Error ${xml.status}: ${xml.statusText}`));
        console.log(xml.response);
    } else {
        console.log(xml.response);
    }
}
