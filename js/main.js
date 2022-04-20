let counter = 0;
for (let currentNumber = 16; currentNumber += 1;) {
    if (currentNumber % 4 == 0 && counter == 2) {
        console.log(currentNumber);
       counter += 1
    }
}