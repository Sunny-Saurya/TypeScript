"use strict";
function isLegal(age) {
    if (age > 18)
        return true;
    else
        return false;
}
let x = isLegal(15);
console.log(x);
