function equals(got, expected) {
  if(got === expected) {
    console.log("✔︎ Passed");
    console.log();
  } else {
    console.log("𝙭 Failed");
    console.log("    Expected: " + expected);
    console.log("    But got:  " + got);
    console.log();
  }
}

var haystack1 = ['pony', 'water', 'keyboard', 'needle', 'cactus', 'needle'];
var haystack2 = ['glass', 'needle'];

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
  for(var i = 0; i < haystack.length; i++) {
    if(haystack[i] === "needle") {
      return i;
    }
  }
}

equals(findNeedle(haystack1), 3);
equals(findNeedle(haystack2), 1);
