type GreetArg = number | string | boolean


function greet(id: GreetArg){
    console.log("your id can be a number or string or boolean "+ id)
}

greet(1);
greet("1");
