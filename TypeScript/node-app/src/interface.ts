interface User {
    firstName: string,
    lastName: string,
    age: number
}

function isLegal(user:User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

isLegal({
    firstName: "Radha",
    lastName:"Sharma",
    age: 20
})