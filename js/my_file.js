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
var monthlyAvg = 0;
var monthlySum = 0;
var totalAvg = 0;
var grProfit = 0;
var grLoss = 0; 

//totalMonths

for (i = 0; i < finances.length; i++) {
    netTotal += finances [i][1] //sum of all figures

    //monthly average in profits
     for (j = 1; j < finances[i].length; j++) {
            monthlySum += finances[j][1] - finances[i][1]; 
            monthlyAvg = netTotal / finances.length -1;
            totalAvg = monthlyAvg.toFixed(2);

        }

    }


//Ouput
    console.log(`Total Months: ${totalMonths}`);
    console.log(`Total: ${netTotal}`);
    console.log(`Average Change: $ ${totalAvg}`);
    console.log(`Greatest Increase in Profit: $${grProfit}`);
    console.log(`Greatest Decrease in Profits: $${grLoss}`);
