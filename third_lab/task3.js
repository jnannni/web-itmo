const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

var isEquivalent = function (firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    } 
    for (var key in firstObject) {
        if (firstObject[key] != secondObject[key]) {
            return false;
        }
    }
    return true;
}

console.log(isEquivalent(object1, object2));
console.log(isEquivalent(object1, object3));