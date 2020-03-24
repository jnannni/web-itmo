var sum = function () {
    var result = 0;
    for (var i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
}
console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));