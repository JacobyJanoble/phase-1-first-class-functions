// 1

function receivesAFunction(cb){
    return cb();
}

receivesAFunction('I love my Ganesh table statue')


// 2

function returnsANamedFunction(test){

    return function insider(){
        console.log('blah bleeh bloop')
    }
}


// 3

function returnsAnAnonymousFunction(){
    return function (){
        console.log('testing123')
    }
}
