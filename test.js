
var initialBalance;
var interestRate;
var interest;
var years;
var compoundInterest;
var balance;

console.log("Welcome to the interest calculator!");
initialBalance = prompt("Enter the beginning balance: ");
initialBalance = parseFloat(initialBalance);
interestRate = prompt("Enter the annual interest rate as a decimal (ex. 5% is .05): ");
interestRate = parseFloat(interestRate);
years = prompt("Enter the amount of years you will be earning interest: ");
years = parseFloat(years);

//Calculate the annual interest
interest = initialBalance * interestRate;
//add the interest
balance = initialBalance + interest;

//calculate total Interest
compoundInterest = 1 + interestRate;

compoundInterest = Math.pow(compoundInterest, years);
compoundInterest = compoundInterest * initialBalance

//display the interest amount
document.write("Interest for one year: $" + interest + "<br>");

document.write("Your new balance  after 1 year is: $" + balance.toFixed(2) + "<br>");

document.write("total interest after " + years + " years is " + compoundInterest.toFixed(2) );
