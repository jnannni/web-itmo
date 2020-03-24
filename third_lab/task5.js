function createCounter() {
    var i = 0;
    return function() {
        return ++i;
    }
}

const count = createCounter();

count(); 
count(); 
count(); 
count(); 

console.log(count());