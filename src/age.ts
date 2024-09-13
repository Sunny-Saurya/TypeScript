function legalAge(age:number)
{
    if(age > 18) return true;
    else return false;
}

let x = legalAge(15);
console.log(x);