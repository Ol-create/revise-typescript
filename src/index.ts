class Account {
    nickname?: string

    constructor(
        public readonly id: number,
        public owner: string,
        private _balance: number) {
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount")
        this._balance += amount

    }
    get balance(): number {
        return this._balance
    }

    set balance(value: number) {
        if (value < 0) 
            throw new Error("Invalid balance")
        this._balance = value
    }

    // private calculateTax(): {
       
    // }
}

let account = new Account(1, 'Oluyemi', 100)
// let modifyBalance = (account.balance = 6);
console.log(account)
console.log(account.balance)
console.log('New balance = ', account.balance = 300)
console.log('Is account an instance of Account: ', (account instanceof Account))