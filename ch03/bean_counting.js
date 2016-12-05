/*
Write a function countBs that takes a string as its only argument and returns a number that 
indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/

var countBs = function(word){
    var b_count = 0;
    var pos;
    for (pos = 0; pos < word.length; pos++){
        if (word[pos] === 'B') b_count++;
    }
    return b_count;
};

console.log(countBs('BananagrabBer')); // 2
console.log(countBs('barnacle Boy')); // 1

var countChar = function(word, char){
    var char_count = 0;
    var pos;
    for (pos = 0; pos < word.length; pos++){
        if (word[pos] === char) char_count++;
    }
    return char_count;
};

console.log(countChar('Pompeii', 'i')); // 2
console.log(countChar('Reptilian', 'A')); // 0

