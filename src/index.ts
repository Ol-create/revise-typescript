function kgToGs(weight: string | number): number {
    //Narrowing
    if (typeof weight === 'number')
        return weight * 1000;
    else
        return parseInt(weight) * 1000
}

kgToGs(10)
kgToGs('10kg')