// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//
//     For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    // console.log(Object.values(source));
        // console.log(Object.keys(obj));
        // console.log(Object.values(obj));
       return collection.filter(obj => {
            return sourceKeys.every(key => {
               return  obj.hasOwnProperty(key) && obj[key] === source[key];
            });
        });
    // Only change code above this line
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// ** above solved with help ** //
//
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
//     Second argument is the word that you will be replacing (before).
//
//     Third argument is what you will be replacing the second argument with (after).
//
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    let newStr;
    if (before[0] === before[0].toUpperCase()) {
        console.log(before);
        newStr = str.replace(before, after[0].toUpperCase() + after.substring(1));
    } else {
        newStr = str.replace(before, after);
    }
    console.log(newStr);
    return newStr;
}

// myReplace("Let us go to the store", "store", "mall"); // should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // should return "He is Sitting on the couch".
// myReplace("His name is Tom", "Tom", "john"); // should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms"); //should return "Let us get back to more
// Algorithms".
