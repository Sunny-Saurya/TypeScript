"use strict";
function isLegal(user) {
    if (user.age > 19)
        return true;
    else
        return false;
}
function gre(user) {
    console.log("Hi there " + user.firstName);
}
// Check if the user is legal
const isUserLegal = isLegal({
    firstName: "Sunny",
    lastName: "Kumar",
    age: 19
});
console.log(isUserLegal);
gre({
    firstName: "Sunny",
    lastName: "Kumar",
    age: 19
});
