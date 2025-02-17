//Task 1
console.log("Task 1")

function calculateInvoice(subtotal, taxRate, discount) {        //Created function to find Invoice total
    return ((subtotal + (subtotal * taxRate)) - discount) .toFixed(2)      //Added toFixed(2) to show decimal places
}
console.log(`Total Invoice: $${calculateInvoice(100,0.08,5)}`)
console.log(`Total Invoice: $${calculateInvoice(500,0.1,20)}`)

//Task 2
console.log("Task 2")

function calculateHourlyWages(salary, hoursPerWeek) { //Created function that takes salary and divides by hours worked through year
    return (salary / (hoursPerWeek * 52)).toFixed(2)    //remaining number is hourly wage. Added .toFixed(2) to show decimal places
}

console.log(`Hourly Wage: $${calculateHourlyWages(52000,40)}`)
console.log(`Hourly Wage: $${calculateHourlyWages(75000,35)}`)

//Task 3
console.log("Task 3")

const calculateLoyaltyDiscount = (amount, years) => {   //Created arrow function here
    let discount;       //defined a discount variable that changes based on years

    if (years >= 5) {   //started by saying if 5 years or more than apply 15% discount
        discount = 0.15;
    } else if (years >= 3) {    //then went to say if 3 years or more than apply 10% discount
        discount = 0.1
    } else {                    //Finally said if any other argument, apply 5% discount
        discount = 0.05
    }
    
    const discountedPrice = amount * (1 - discount) //made the function that discounts the price

    return `Discounted Price: $${discountedPrice.toFixed(2)}`;  //told the function what to output
};

console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateLoyaltyDiscount(200, 2));

//Task 4
console.log("Task 4")

function calculateShippingCost(weight, location, expedited = false) { //Created function
    let baseCost;       //Declared variable baseCost. I did this so we could deal with the expedited value later on

    if (location === "USA") {   //Said that if the location is the USA then use equation: 5 + .5 * weight
        baseCost = 5 + (0.5 * weight) 
    } else if (location === "Canada") { //said if location was Canada then use the eqn 10 + .7 * weight
        baseCost = 10 + (0.7 * weight) 
    }
    if (expedited) {            //here I use the baseCost that we defined above and add 10 to it if the order was expedited
        baseCost += 10
    }
    return `Shipping Cost: $${baseCost.toFixed(2)}` //tells the function what to return

}

console.log(calculateShippingCost(10, "USA", true))
console.log(calculateShippingCost(5, "Canada", false))

//Task 5
console.log("Task 5")

function calculateLoanInterest(principal, rate, years) {    //made function that multiplies the three variables together
    return (principal * rate * years).toFixed(2)    //added .toFixed(2) to show decimal places
}

console.log(`Total Interest $${calculateLoanInterest(1000, 0.05, 3)}`)
console.log(`Total Interest $${calculateLoanInterest(5000, 0.07, 5)}`)

//Task 6
console.log("Task 6")

let transactions = [500, 1200, 3000, 800, 2200] //declared array of test data
function filterHighValueTransactions(transactions, filterFunction) {    //made the higher order function which uses
    return transactions.filter(filterFunction);                     //the transactions array and a filterFunction yet to be defined
}

const result = filterHighValueTransactions(transactions, amount => amount > 1000)   //declare a variable result and call the function, then defined the filter function
console.log(result);    //console.logged the result variable

//Task 7
console.log("Task 7")

const createBudgetTracker = () => {    //created a function createBudgetTracker and declared
    let budget = 0                    //the starting budget as 0. Then made an addExpense
    const addExpense = (amount) => {        //function that took the total expense and added the amount
        budget -= amount;             //I then had the updated total expense returned.
        return `Current Balance: $${budget}`
    };
        return addExpense;      //Returned the inner function
    };
    let tracker = createBudgetTracker();
    console.log(tracker(300));
    console.log(tracker(200));

//Task 8
console.log("Task 8")
                                            //recursive function to calculate revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) {                      //base case: stop recursion when years reach 10
        return `Projected Revenue: $${revenue.toFixed(2)}`;
    }
            //Recursive case: increases revenue by 5% and decrement the years
    return calculateGrowth(years + 1, revenue * 1.05);
}

console.log(calculateGrowth(8, 1000));
console.log(calculateGrowth(5, 5000));