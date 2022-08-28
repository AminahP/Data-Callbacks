// ----- arrays -----

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// ----- every -----


// Determine if every number is greater than or equal to 0
const checkNum = (num) => (num >= 0);
nums.every(checkNum)
console.log(checkNum(nums))

// Determine if every word shorter than 8 characters
const checkWord = (word) => word.length < 8;
panagram.every(checkWord)
console.log(checkWord(panagram))

 
// ----- filter -----


// Filter the array for numbers less than 4
const filteredNums = (num) => num < 4
const filteredArr = nums.filter(filteredNums)
console.log(filteredArr)

// Filter words that have an even length
const filteredWords = (word) => (word.length % 2 === 0)
const filteredWordArr = panagram.filter(filteredWords)
console.log(filteredWordArr)


// ------- find ------


// Find the first value divisible by 5
const divisByFive = nums.find(num => num % 5 === 0)
console.log(divisByFive)

// Find the first word that is longer than 5 characters
const longerThanFive = (word) => (word.length > 5)
const longestWord = panagram.find(longerThanFive)
console.log(longestWord) // undefined, no words longer than 5 characters


// ---- find index ---


// Find the index of the first number that is divisible by 3
const numIndex = (num) => (num % 3 === 0);
console.log(nums.findIndex(numIndex))

// Find the index of the first word that is less than 2 characters long
const wordIndex = (word) => (word.length < 2)
console.log(panagram.findIndex(wordIndex)) // Returns "-1" if no index


// ---- for each  ----


// Console.log each value of the nums array multiplied by 3
let timesThree = []
nums.forEach(multiplyByThree = (nums) => {
    timesThree.push(nums * 3);
})
console.log(timesThree)

// Console.log each word with an exclamation point at the end of it
let exclPoint = []
panagram.forEach(exclamation = (word) => {
    if (word.includes('!')) {
      exclPoint.push(word);
  }
})
console.log(exclPoint)



// ------- MAP -------
 

// Make a new array of each number multiplied by 100
const numMapArr = nums.map(num => num * 100);
console.log(numMapArr);

// Make a new array of all the words in all uppercase
const wordMapArr = panagram.map(word => word.toUpperCase());
console.log(wordMapArr);


//           SOME 


// Find out if some numbers are divisible by 7
const diviBySeven = (num) => num % 7 === 0;
console.log(nums.some(diviBySeven)); // returns true if true

// Find out if some words have the letter a in them
const letterAWords = (word) => word.includes('a');
console.log(panagram.some(letterAWords)); // returns true if true


// -- Array Methods Challenge Problems --


// --- isPanagram ---
// Using the ** panagram ** array - test whether each letter a-z (case insensitive) is used at least once
hasAllLetters = (arr) => {
  let splitArr = arr.join('').toLowerCase()
  if(splitArr.match('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')) {
    
    return true
  } else {
    return false
  }
}
console.log(hasAllLetters(panagram))

// --- Working with data ---
// filter for products with a price that is less than 10, using the array below:


//is this mandatory?


//sort alphabetically by product name

 
const products = [
  {
    "name": "allen wrench",
    "price": 2.99,
    "description": "handy tool"
  },
  {
    "name": "cornucopia",
    "price": 5.99,
    "description": "festive holiday decoration"
  },
  {
    "name": "banana",
    "price": 0.99,
    "description": "full of potassium"
  },
  {
    "name": "guillotine (cigar)",
    "price": 10.59,
    "description": "behead your stub"
  },
  {
    "name": "jack-o-lantern",
    "price": 3.99,
    "description": "spooky seasonal fun"
  },
  {
    "name": "doggie treat (box)",
    "price": 5.99,
    "description": "fido loves 'em"
  },
  {
    "name": "egg separator",
    "price": 3.99,
    "description": "it separates yolks from whites"
  },
  {
    "name": "LED lightbulb",
    "price": 6.55,
    "description": "It's super-efficient!"
  },
  {
    "name": "owl pellets",
    "price": 3.99,
    "description": "Don't ask what they used to be."
  },
  {
    "name": "flag",
    "price": 5.99,
    "description": "catches the breeze"
  },
  {
    "name": "hair brush",
    "price": 6.99,
    "description": "fine boar bristles"
  },
  {
    "name": "iridium (one gram)",
    "price": 19.36,
    "description": "corrosion-resistant metal"
  },
  {
    "name": "quark",
    "price": 0.01,
    "description": "Very small"
  },
  {
    "name": "turtleneck",
    "price": 19.99,
    "description": "available in black and slightly-darker black"
  },
  {
    "name": "kaleidoscope",
    "price": 8.25,
    "description": "tube with moving plastic pieces inside"
  },
  {
    "name": "mitt (leather)",
    "price": 15,
    "description": "regulation sized"
  },
  {
    "name": "nothing",
    "price": 10,
    "description": "Hey, if you pay us, we won't ask any questions."
  },
  {
    "name": "violin",
    "price": 2000,
    "description": "Talk about a JS fiddle..."
  },
  {
    "name": "yoyo",
    "price": 1,
    "description": "We had to pull some strings to get this one in."
  },
  {
    "name": "pincushion",
    "price": 1.99,
    "description": "You'll get 'stuck' on it"
  },
]