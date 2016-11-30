# Eloquent-Javascript-Exercises

My solutions to the code exercises in Eloquent Javascript, written by Marijn Haverbeke and published
by No Starch Press. 

[Link to Booksite](http://eloquentjavascript.net/)

Eloquent Javascript is licensed under a Creative Commons attribution-noncommercial license. 

I am sharing my solutions to the code exercises in Haverbeke's fantastic book in hopes that
others working through the exercises might benefit from my solutions or offer advice for improving them.
Minimally, I will try to develop my own working (if messy) solution before looking to the book resources or outside help.

Current progress:

Chapter 02 code exercises refactor 11/30/16:
- Updated my chess board solution to be a little cleaner and to have more well-defined behavior when given odd numbers
- chessBoard(width, height){} has been altered to buildChessBoard(size){}, it will now only build boards with width and height of size
- When passed an odd number, buildChessBoard() will return a board of height size-1 and width size-1

Chapter 02 code exercises initial commit 11/29/16:  
- See ch02/looping_a_triangle.js, ch02/fizz_buzz.js, and ch02/chess_board.js  
- Not very happy with my solution for the Chess Board problem  
- I need to refactor chessBoard() so that odd-numbered "width" arguments passed into chessBoard() provide the expected number of columns 




