function runAfter1s(fun: () => void){
    fun()
    setTimeout(() => {
        console.log("Hi there");
    }, 1000);
}

runAfter1s(function(){
    console.log("Sunny");
})