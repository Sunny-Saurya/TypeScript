"use strict";
function isLega(user) {
    if (user.age > 18) {
        console.log("Allowed");
    }
    else {
        console.log("Not Allowed");
    }
}
function greet(user) {
    console.log("Hello, " + user.firstname);
}
isLega({
    firstname: "John",
    lastname: "Doe",
    age: 25
});
