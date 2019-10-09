var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus', 'needle'];
var haystack2 = ['glass', 'needle'];
var haystack3 = ['teacup', 'noodle'];
var haystack4 = ['needle', 'noodle', 'needle', 'cat', 'dog', 'needle'];

/*
Instructions:

Take the following `findNeedle` function and extend it so that it:
- Does not return a single number, but an array of all the positions that contain "needle"
- Returns an empty array (`[]`) when there is no needle in the haystack

Be sure to follow TDD:
1. Write your unit tests first and let them fail
2. Implement the behaviour and let the tests pass
*/

function findNeedle(haystack) {
    let foundIndexArray = [];
    if(haystack){
        for(var i = 0; i < haystack.length; i++) {
            if(haystack[i] === "needle") {
                foundIndexArray.push(i)
            }
        }
    }
    return foundIndexArray;
}

test('it will fail if the array is not passed in', () => {
    expect(findNeedle()).toEqual([])
});

test('it will return an empty array if no needle found', () => {
    expect(findNeedle(haystack3)).toEqual([])
});

test('it will return index 2 if passed haystack2', () => {
    expect(findNeedle(haystack2)).toEqual([1])
});

test('it will find more than one needle index if passed haystack1', () => {
    expect(findNeedle(haystack1)).toEqual([3,5])
});

test('it will return array length 3 if passed haystack4', () => {
    expect(findNeedle(haystack4)).toHaveLength(3)
});
