/* PSEUDO Code
total no of months is length of array
for loop array 
nested loop for average and use j[i][1]
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
    var figures = finances[i][1]; //no. of months
    netTotal += finances [i][1] //netTotal

    //monthly change in profits
    for (j = 1; j < finances[i].length; j++) { //j starts from 2nd sub-array(feb10)
        monthlyChange
    }
}




//Ouput
console.log(totalMonths);
console.log(netTotal);