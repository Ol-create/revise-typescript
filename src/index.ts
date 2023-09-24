type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id == 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(0)
   
// if (customer !== null && customer !== undefined)
//We can use the optional property access operator
console.log(customer?.birthday?.getFullYear()) 
    
//We can do element optional access operator

//customer?.[0]
//optional call operator
let log: any = null;
log?.('a')

