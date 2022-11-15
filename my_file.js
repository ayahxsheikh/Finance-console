/* PSEUDO Code
total no of months is length of array
for loop array 
nested loop for average and use j[i][1]
*/

/* Heading */
console.log('Financial Analysis');

/* Gloobal Variables */
var totalMonths = finances.length; //no. of months (86)
var netTotal = 0;
var monthlyAvg = 0;
var avChange = 0;
var grProfit = 0;
var grLoss = 0; 

//totalMonths

for (i = 0; i < finances.length; i++) {
    var figures = finances[i][1]; 
    netTotal += finances [i][1] //sum of all figures

    //monthly average in profits
    avChange = netTotal/totalMonths
    console.log(avChange);

       
    }


//Ouput
console.log(totalMonths);
console.log(netTotal);
