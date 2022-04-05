const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(arr, chunkSize) {
    if (chunkSize === 0) {
        console.log('Error. You cannot use 0');
    } else {
        do {
            console.log(arr.splice(0, chunkSize));
        } while (arr.length > 0);
    }

}

chunk(arr, 3);
