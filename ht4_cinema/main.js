const movies = [
    {id: 1, name: "Fast and Furious", cost: 5.99},
    {id: 2, name: "Fast and Furious 2", cost: 3.99},
    {id: 3, name: "Fast and Furious 4", cost: 4.99},
    {id: 4, name: "Shrek", cost: 12.99},
    {id: 5, name: "Spencer", cost: 12},
    {id: 6, name: "Dune", cost: 35},
    {id: 7, name: "The Lost Daughter", cost: 10},
    {id: 8, name: "Parallel Mothers", cost: 9.99},
    {id: 9, name: "The Eyes of Tammy Faye", cost: 7.99},
    {id: 10, name: "Being the Ricardos", cost: 6.99},
    {id: 11, name: "Don't look up", cost: 4.99},
    {id: 12, name: "Joker", cost: 5.99},
    {id: 13, name: "No time to die", cost: 19},
];

const cart = [];


function addToCart(id, cost) {
    let idMovie = movies.find(movie => movie.id === id);
    return cart.push(idMovie);
}

function printCheck() {
    let i = 1;
    let movieName = cart.forEach(element => console.log(`${i++}`, '-', element.name, '-', element.cost));
    return movieName;
}


addToCart(1);
addToCart(6);
addToCart(9);
addToCart(13);

printCheck();

