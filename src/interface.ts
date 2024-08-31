function isLegal(user: {
    firstName: string,
    lastName: string,
    age: number
}) {
    if (user.age > 19) return true;
    else return false;
}

function greet(user: {
    firstName: string,
    lastName: string,
    age: number
}) {
    console.log("Hi there " + user.firstName);
}

// Check if the user is legal
const isUserLegal = isLegal({
    firstName: "Sunny",
    lastName: "Kumar",
    age: 19
});

console.log(isUserLegal); 

greet({
    firstName: "Sunny",
    lastName: "Kumar",
    age: 19
});
