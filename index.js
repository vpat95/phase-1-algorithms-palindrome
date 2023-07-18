/* 
  Add your pseudocode here:

  create isPalindrome function 
  - set two variables at opposite ends of string
    - increment/decrement and test for equality
  -


*/

const isPalindrome = function (str) {
  
  let j = str.length
  for (let i = 0; i < str.length/2; i++) {
    j--
    if (str.charAt(i) !== str.charAt(j)) return false;
  }
  return true;
};

/*
  Add written explanation of your solution here:
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
