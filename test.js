
var balance;
var interestRate;
var interest;

console.log("Welcome to the interest calculator!");
balance = prompt("Enter the beginning balance: ");
balance = parseFloat(balance);
interestRate = prompt("Enter the annual interest rate as a decimal (ex. 5% is .05): ");
interestRate = parseFloat(interestRate);

//Calculate the interest
interest = balance * interestRate;
//add the interest
balance = balance + interest;

//display the interest amount
document.write("Interest for the year: $" + interest + "<br>");

document.write("Your new balance is: $" + balance.toFixed(2));
