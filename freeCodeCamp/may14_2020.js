// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// //
// // In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// //
// //     In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// //
// //     Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
    for (let values of collection) {
        let val =  Object.values(values);
        console.log(Object.keys(values));
        console.log(val);
        if (!Object.keys(values).includes(pre)) {
            console.log('not in all the keys');
            return false;
        } else {
            for (let stuff of val) {
                if  (stuff === false || stuff <= 0 || stuff === null || stuff === undefined || stuff === ' ') {
                    console.log('That value means nothing!');
                    return false;
                } else if (!stuff) {
                    console.log('Not a number');
                    return false;
                }
            }
        }
    }
    console.log('It is there');
    return true;
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//should return true.

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//should return false.

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
//should return false.

truthCheck([{"single": "double"}, {"single": NaN}], "single");
//should return false
