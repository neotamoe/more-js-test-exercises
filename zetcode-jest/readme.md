original code/tutorial: http://zetcode.com/javascript/jest/

ways to run tests:
* npx jest filename
    e.g. npx jest math.test.js

* npm test
(runs what is designated in package.json)


package.json test script:
      
  * --verbose flag to get more output and information about test runs
  * file path to test directory (specifies what directory contains tests)

you can indicate tests to skip, if desired by using `x` or `skip`
```
xtest('2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test.skip('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});

```

use parameterized tests to run the same test multiple times with different values using the each() global function.  see math-param.test.js for example.

use beforeAll() for any test setup needs.  beforeAll() runs a function before tests run and "If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests." (source: tutorial listed above)

use describe() to group related tests together.  beforeAll() then can be run only before one group, if appropriate.

to run jsonserver, run `jsonserver --watch --path users.json`
then run `node users-app.js`