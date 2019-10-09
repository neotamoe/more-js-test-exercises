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

equals(1, 1); // This should pass!
equals(1, 2); // This should fail
equals("Hello", "Hello"); // This should pass
