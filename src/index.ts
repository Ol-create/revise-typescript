let employee: { id: number, employeeName: string, retire: (date: Date) => void } = {
    id: 1,
    employeeName: "Oluyemi",
    retire: (date: Date) => {
        console.log(date)
    }
}