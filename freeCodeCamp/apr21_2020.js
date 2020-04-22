// Check if a value is classified as a boolean primitive. Return true or false.
//
//     Boolean primitives are true and false.

function booWho(bool) {
    console.log(typeof(bool));
    if (typeof(bool) === 'boolean') {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    }
}

// booWho(null);
booWho(false); // should return true

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    let words = str.split(" ");
    let title = [];
    for (let word of words) {
        title.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        console.log(word[0]);
    }
    console.log(title);
    return title.join(' ');
}

// titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt"); // should return Short And Stout.

