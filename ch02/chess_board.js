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

function chessBoard(width, height){
    var countRows;
    var output = "";
    for (countRows = 0; countRows < height; countRows++){
        //check if even
        if (countRows % 2 === 0){
            output += (" #".repeat(width/2) + "\n");
        } else {
            output += ("# ".repeat(width/2) + "\n");
        }
    }
    console.log(output);
}

chessBoard(8, 8); // works for any even width... odd widths result in number of columns being equal to width - 1