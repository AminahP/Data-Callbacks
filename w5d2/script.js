// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function buildFrequency(word) {
    const frequencies = {};
    for (let i = 0; i < word.length; i++){
        let char = word[i];
        if (frequencies[char] == undefined) {
            frequencies[char] = 0;
        }
        frequencies[char]= frequencies[char] + 1;
    }
    return frequencies; 
}


function anagrams(str1,str2) {
   if (str1.length !== str2.length){
    return false;
   }
   let frequency1 = buildFrequency(str1);

   let frequency2 = buildFrequency(str2);

   for (let i = 0; i < str1.length; i++){
    let char = str1[i];

    if (frequency1[char] !== frequency2[char]){
        return false;
    }
   }
   return true;
}


// console.log(anagrams('rail safety', 'fairy tales'))
// should bbe true 
// console.log( anagrams('RAIL! SAFETY!', 'fairy tales'))
//should be true 
console.log(anagrams('Hi there', 'Bye there'))
//should be false

// more anagrams 
// console.log(anagrams('Amen', 'Mean'))