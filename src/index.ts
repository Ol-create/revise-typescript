type Employee = {
    id: number, employeeName: string, retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    employeeName: "Oluyemi",
    retire: (date: Date) => {
        console.log(date)
    }
}