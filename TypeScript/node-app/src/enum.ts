// type KeyInput = "up" | "down" | "left" | "down";

// function doSomething(keyPressed: KeyInput){
//     if(keyPressed=="up"){
//         // do something
//     }
// }

// doSomething("up");
// doSomething("yoii"); // we can not do this

// but enums are slightly more human readable

// ------------------------------------

enum Direction{
    Up,  // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}

function doSomething(keyPressed: Direction){
    if(keyPressed==Direction.Up){
        // do something
        console.log(Direction.Up);
    }
}

doSomething(Direction.Up);