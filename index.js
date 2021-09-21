
// ASSIGNMENT

//1
function receivesAFunction(cb){
    cb();
}   
function callBackFunction (){
    console.log("I am a callback function and I have been called!")
}
receivesAFunction(callBackFunction);

//2

function returnsANamedFunction() {
    return receivesAFunction;
}

//3
function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am an anonymous function.")
    };
}

returnsANamedFunction();