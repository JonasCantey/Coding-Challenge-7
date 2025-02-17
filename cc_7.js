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