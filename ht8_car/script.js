let creationObject = function() {
    let unExistingAnimal = {
    };

    let colour = prompt('What colour is your animal?', );
    unExistingAnimal.colour = colour;
    document.write(`The animal you have created is ${colour.toLowerCase()}.<br>`);

    let tail = +prompt('How many tails does your creature have?', );
    unExistingAnimal.tail = tail;
    if (tail <= 0) {
        document.write(`Your strange creature doesn't have tails at all.<br>`)
    } else if (tail === 1) {
        document.write("Your strange creature has only one tail.<br>");
    } else {
        document.write(`Your strange creature has ${tail} tails.<br>`);
    }

    let paws = +prompt("How many paws does your animal have?", );
    unExistingAnimal.paws = paws;
    if (paws >= 0) {
        document.write("It doesn't have paws.<br>")
    } else if (paws === 1) {
        document.write('It has only one paw.<br>');
    } else {
        document.write(`It has ${paws} paws.<br>`);
    }

    let flyAbilities = prompt('Can it fly?', );
    unExistingAnimal.flyAbilities = flyAbilities;
    if (flyAbilities === 'yes') {
        document.write('Your unexisting creature can fly.<br>');
    } else {
        document.write('Unfortunately, your animal cannot fly. Maybe, it\'s for the best.<br>');
    }

    let countryOfOrigin = prompt('What country does it come from?', );
    unExistingAnimal.countryOfOrigin = countryOfOrigin;
    document.write(`Your animal comes from ${countryOfOrigin[0].toUpperCase() + countryOfOrigin.slice(1)}.<br>`);

    console.log(unExistingAnimal);
};

creationObject();
