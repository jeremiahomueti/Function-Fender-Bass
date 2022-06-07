/*
There is sth called Hoisting. 

Hoisting works for function declarations, but don't work in function expressions. 

So, essentially, you can call the function before the function block, for function declarations.

If you attempt, on the other hand to call a function expression in a line on top where we have the function expression, 
the expression will fail to see the function block.

This is a gross oversimplification of what Hoisting really is, but the point has been communicated, and that's what matters.
*/


falconHeavy();
falconHeavy();

function falconHeavy()
{
    console.log("5, 4, 3, 2, 1");
}

