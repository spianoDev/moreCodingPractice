function confirmEnding(str, target) {
    let index = str.length - target.length;
    let pieceOfStr = [];
    for (let i = 0; i < target.length; i++) {
        pieceOfStr.push(str[index]);
        index += 1;
    }
    console.log(pieceOfStr);
    let piece = pieceOfStr.join('');
    return piece === target;
}

// console.log(confirmEnding("Bastian", "n"));

// console.log(confirmEnding("Congratulation", "on")); // should return true.
console.log(confirmEnding("He has to give me a new name", "name is")); // false
