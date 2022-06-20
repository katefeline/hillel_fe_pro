/*
--- ДЗ ---
*/


/*
    1. Уникализация значений в массиве. (решить через filter)
    Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив,
    состоящий только из уникальных значений первого массива.
*/
let uniqueArrayOfDigits = function(...arg) {
    let unique = [];

    for(let i =0; i<arg.length;i++) {
        if (!unique.includes(arg[i])) {
            unique.push(arg[i]);
        }
    }
    console.log(unique);

}

uniqueArrayOfDigits(1, 2, 3, 1, 78, 78, 78);



/*
     2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
*/

Number.prototype.plus = function (value) {
    return this + value;
}

Number.prototype.minus = function (value) {
    return this - value;
}
console.log((2).plus(3).minus(1));

/*
    3. Анаграмма
    Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
    Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/

function anagram(firstWord, secondWord) {
    firstWord = firstWord.split(' ').join('').trim().toLowerCase();
    secondWord = secondWord.split(' ').join('').trim().toLowerCase();

    let clearedFirstWord = firstWord.replace(/[,.:;!?]/gi, '');
    let clearedSecondWord = secondWord.replace(/[,.:;!?]/gi, '');

    if (clearedFirstWord === clearedSecondWord) {
        console.log('This string is anagram!');
    } else {
        console.log('This is not an anagram!');
    }

}
anagram('Hello, world', 'hello, world, my new best friend');
anagram('Not my responsibility', 'NotMyRespons!i?b;ility');



/*
    * 4. Напишите функцию, которая будет удалять повторяющиеся значения и возвращать получившийся массив.
    Значения в результирующем массиве должны быть отсортированны по кол-ву слов во входном массиве.
*/

const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];

function solution(words) {
    let object = {};

    let setOfWords = new Set(words);
    let setKeys = setOfWords.values();
    for (let i=0;i<setOfWords.size;i++) {
        let word = setKeys.next().value;
        let counter = 0;

        for (let i=0;i<words.length;i++) {
            if (words[i] === word) {
                counter++;
            }
        }
        object[counter] = word;

    }
    console.log(object);
}

solution(words);
