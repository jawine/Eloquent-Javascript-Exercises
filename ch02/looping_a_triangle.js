/* Write a loop that makes seven calls to console.log() 
to output the following triangle:

#
##
###
####
#####
######
#######
*/

function loopingTriangle(num){
    var count = 1;
    while (count <= num){
        // tried string multiplication (like in python) first, but realized String.prototype.repeat() is what I wanted
        console.log('#'.repeat(count)); 
        count++;
    }
}

loopingTriangle(7); //returns expected answer
