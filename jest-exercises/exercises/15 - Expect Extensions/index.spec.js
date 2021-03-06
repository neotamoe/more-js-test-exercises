expect.extend({
  toBeFunction(received) {
    const pass = typeof received === 'function';
    if (pass) {
      return {
        pass,
        message: () => `expected value to not be a function; actual: ${typeof received}`,
      };
    }
    return {
      pass: false,
      message: () => `expected value to be a function; actual: ${typeof received}`,
    };
  },
  toHaveProperty(received, argument) {
    const pass = typeof received[argument] !== 'undefined';
    if (pass) {
      return {
        pass,
        message: () => `expected object to not have property: ${argument}; actual: ${Object.keys(received)}`,
      };
    }
    return {
      pass: false,
      message: () => `expected object to be have property: ${argument}; actual: ${Object.keys(received)}`,
    };
  },
});

test('should return function', () => {
  const value = () => { console.log("this is a function") };
  expect(value).toBeFunction();
});

test('should not be function', () => {
  const value = "this is a string";
  expect(value).not.toBeFunction();
});

test('should return property', () => {
  const value = { name: 'Violet', age: 4 };
  expect(value).toHaveProperty('name');
});
test('should return property', () => {
  const value = { name: 'Violet', isYoungest: true };
  expect(value).not.toHaveProperty('age');
});
