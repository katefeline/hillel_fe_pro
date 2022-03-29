let isEvenisSimple = function () {

    let a = +prompt('Input number:', );

    let isEven = function () {
        if (a % 2 === 0) {
            console.log(`You have put ${a}. This number is Even`);
        } else {
            console.log(`You have put ${a}. This number is Odd`);
        }
    }
    let isSimple = function () {
        let counter = 0;
        for (i=a-1;i>1;i--) {
            if (a % i === 0) {
                counter++;
            }
        } if (counter >= 1) {
            console.log(`${a} is complex number`);
        } else {
            console.log(`${a} is simple number`);
        }
    }

    return isEven(), isSimple();
}

