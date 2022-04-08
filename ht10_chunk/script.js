const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(arr, chunkSize) {
    let arrayFullOfChunks = [];
    if (chunkSize === 0) {
        console.log('Error. You cannot use 0');
    } else if (chunkSize === 1) {
        console.log(arr);
    } else {
        for (key in arr) {
            arrayFullOfChunks.push(arr.splice(0, chunkSize));
            if (arr.length < chunkSize) {
                arrayFullOfChunks.push(arr);
            }
        }
        console.log(arrayFullOfChunks);
    }

}

chunk(arr, 4);
