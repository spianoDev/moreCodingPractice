// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    let answer = arr;
    console.log(arguments[0]);
    for (let value of arguments[0]) {
        console.log(value);
        let i = 1;
        while (i < arguments.length) {
            let searchValue = arguments[i];
            console.log('value is ' +searchValue);
            let index = answer.indexOf(searchValue);
            if (index >= 0) {
                answer.splice(index, 1);
                console.log('this is the index ' + index + " of " + searchValue);
            }
                i += 1;
        }
    }
    console.log(answer);
    return answer;
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].
