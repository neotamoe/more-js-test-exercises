function findNeedle(haystack) {
  let foundIndexArray = [];
  if(haystack) {
      haystack.map((item, index) => {
          if(item === "needle") {
              foundIndexArray.push(index)
          }
      })
  }
  return foundIndexArray;
}

module.exports = findNeedle 