function isCharVowel(char) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
  };
  return char in vowels;
}

function vowelCount(str) {
  const map = new Map();
  for (const char of str) {
    const lowerChar = char.toLowerCase();
    const isVowel = isCharVowel(lowerChar);
    if (!isVowel) continue;

    const existingVal = map.get(lowerChar) || 0;
    map.set(lowerChar, existingVal + 1);
  }
  return map;
}

console.log(vowelCount("City of stars"));
