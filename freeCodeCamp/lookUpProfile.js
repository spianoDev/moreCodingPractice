let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
            // console.log(Object.keys(contacts[0])[i]);
            // console.log(contacts[i][prop]);
            if (name === contacts[i]['firstName']) {
                if (prop === Object.keys(contacts[0])[0]) {
                    console.log(contacts[i][prop]);
                    return contacts[i][prop];
                } else if (prop === Object.keys(contacts[0])[1]){
                    console.log(contacts[i][prop]);
                    return contacts[i][prop];
                } else if (prop === Object.keys(contacts[0])[2]){
                    console.log(contacts[i][prop]);
                    return contacts[i][prop];
                } else if (prop === Object.keys(contacts[0])[3]){
                    console.log(contacts[i][prop]);
                    return contacts[i][prop];
                } else {
                    console.log('No such property');
                    return 'No such property'
                }
            }
        }
    console.log('No such contact');
    return 'No such contact'
}

lookUpProfile("Kristian", "lastName");
