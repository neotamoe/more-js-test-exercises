const findNeedle = require('../modules/findNeedle.js');

const haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus', 'needle'];
const haystack2 = ['glass', 'needle'];
const haystack3 = ['teacup', 'noodle'];
const haystack4 = ['needle', 'noodle', 'needle', 'cat', 'dog', 'needle'];

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

test('it will return array with length 3 if passed haystack4', () => {
    expect(findNeedle(haystack4)).toHaveLength(3)
    expect(findNeedle(haystack4)).toEqual([0,2,5])
});
