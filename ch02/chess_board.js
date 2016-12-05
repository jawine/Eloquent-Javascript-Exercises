/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either
a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the 
given width and height
*/

function buildChessBoard(size){
    var oddRow = ('# '.repeat(Math.floor(size/2)));
    var evenRow = (' #'.repeat(Math.floor(size/2)));
    var output = [];
    while (output.length < size){
        output.push(oddRow);
        output.push(evenRow);
    }
    console.log(output.join('\n'));
}
buildChessBoard(8) // works as expected for even numbers
// buildChessBoard(12); 
buildChessBoard(5); // rounds down to nearest even numbers when given odd
// buildChessBoard(11);