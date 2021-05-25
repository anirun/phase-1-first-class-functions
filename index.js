function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return namedFunction = () => {console.log('hi');}
}

function returnsAnAnonymousFunction() {
    return () => {console.log('hey');}
}