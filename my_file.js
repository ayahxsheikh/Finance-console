
/* Heading */
console.log('Financial Analysis');

/* Gloobal Variables */
var totalMonths = finances.length; 
var netTotal = 0;
var monthlyAvg = 0;
var monthlySum = 0;
var totalAvg = 0;
var grProfit = 0;
var grMonth = '';
var grLoss = 0; 
var grLossMonth = '';

//totalMonths

for (var i = 0; i < finances.length; i++) {
    netTotal += finances [i][1] //sum of all figures

    //monthly average in profits
     for (var j = 1; j < finances[i].length; j++) {
            monthlySum += finances[j][1] - finances[i][1]; 
            monthlyAvg = netTotal / finances.length -1;
            totalAvg = monthlyAvg.toFixed(2); 
            //used montlySum to assign totalAvg to 2 decimal places.
        }
    }
    //The greatest increase in profits (date and amount) over the entire period
        var profitMonth = '';
        var grAmount;
        for (i = 0; i < finances.length; i++) {
            profitMonth = finances[i][0];
            grAmount = finances[i][1];

            if(grProfit <= grAmount){
                grMonth = profitMonth;
                grProfit = grAmount;
            }

    
     //The greatest decrese in profits (date and amount) over the period.       
        var lossMonth = '';
        var lossAmount;
        for (i = 0; i < finances.length; i++) {
            lossMonth = finances[i][0];
            lossAmount = finances[i][1];

            if(grLoss >= lossAmount){
                grLossMonth = lossMonth;
                grLoss = lossAmount;
            }
     } 


//Ouput
    console.log(`Total Months: ${totalMonths}`);
    console.log(`Total: ${netTotal}`);
    console.log(`Average Change: $ ${totalAvg}`);
    console.log(`Greatest Increase in Profit: (${grMonth}) - $${grProfit}`);
    console.log(`Greatest Decrease in Profits: $${grLoss}`);
