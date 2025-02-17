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
