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

/*
Instructions:

Turn the below "sum" code into a function
that returns the sum instead of printing it.
Then write some test cases for it to make
sure it works!
*/

function sum(a, b) {
  var result = a + b;
  return result;
}
