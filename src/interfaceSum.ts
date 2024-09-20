interface User1{
    name: string,
    age: number,
};

function sumOfAge(user1: User1, user2: User1)
{
    return user1.age + user2.age;
}

const age = sumOfAge({name: "sunny", age: 20}, {name: "sagar", age: 25});
console.log(age); // Output: 45
