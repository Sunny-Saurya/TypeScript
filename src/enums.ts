
// type keyInput = "up" | "down" |  "left" | "right"  also wirte this but not go practice

enum Direction{   // best practice
    up,
    down,
    left,
    right
}

function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.up){

    }
}

doSomething(Direction.up);
doSomething(Direction.down);
doSomething(Direction.left);
doSomething(Direction.right);