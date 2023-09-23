function addSum(numA: number, numB: number = 50):number {
    
    if (numA > 50)
        return numA + numB
    return numB
}
 
console.log(addSum(2, 3))