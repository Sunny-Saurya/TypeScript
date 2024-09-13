interface User{
    firstname: string,
    lastname: string,
    age: number
}


function isLega(user:User){
    if(user.age > 18){
        console.log("Allowed");
    }
    else{
        console.log("Not Allowed");
    }
}

function greet(user:User){
    console.log("Hello, " + user.firstname);
}

isLega({
    firstname: "John",
    lastname: "Doe",
    age: 25
})