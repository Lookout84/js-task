function findLongestWord(string = "", longestWord = "") {
  // Write code under this line
  longestWord = string.split(" ")[0];
  for (let i = 1; i < string.split(" ").length; i += 1) {
    if (string.split(" ")[i].length > longestWord.length) {
      longestWord = string.split(" ")[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
