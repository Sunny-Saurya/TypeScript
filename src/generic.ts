// function getFirstElement<T>(arr: T[]) {
//     return arr[0];
// }

// const el = getFirstElement(["SunnyKumar", "Chiku"]);
// console.log(el.toLowerCase())


// 

function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["sunnykumar","2"]);
console.log(el.toLowerCase())