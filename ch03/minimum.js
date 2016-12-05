/* Write a function min that takes two arguments and returns their minimum. */

var findMin = function(num1, num2){
    var num1_less_than_num2 = num1 < num2;
    return num1_less_than_num2 ? num1 : num2;
};

console.log(findMin(10, 12)); // 10
console.log(findMin(43, 18)); // 18
console.log(findMin(-10, 0)); // -10