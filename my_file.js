/* PSEUDO Code
total no of months is length of array
for loop array 
accumalate amount inside array using nested for loop

*/

/* Heading */
console.log('Financial Analysis');

/* Gloobal Variables */
var totalMonths = finances.length; 
var netTotal = 0;
var monthlyChange = 0;
var avChange = 0;
var grProfit = 0;
var grLoss = 0; 

//totalMonths

for (i = 0; i < finances.length; i++) {
    var months = finances[i][1]; //no. of months
    netTotal += finances [i][1] //netTotal

    for (j = 1; j < finances[i].length; j++) { //monthly change in profits

       // console.log(finances[j]);
    }
}




//Ouput
console.log(totalMonths);
console.log(netTotal);