//Task 1
console.log("Task 1")

function calculateInvoice(subtotal, taxRate, discount) {        //Created function to find Invoice total
    return ((subtotal + (subtotal * taxRate)) - discount) .toFixed(2)      //Added toFixed(2) to show decimal places
}
console.log(`Total Invoice: $${calculateInvoice(100,0.08,5)}`)
console.log(`Total Invoice: $${calculateInvoice(500,0.1,20)}`)


