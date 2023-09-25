class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposite(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount")
        this._balance += amount

    }
    getBalance(): number {
        return this._balance
    }

    private calculateTax(): {

    }
}

let account = new Account(1, 'Oluyemi', 100)
// let modifyBalance = (account.balance = 6);
console.log(account)
console.log(account.getBalance())
console.log('Is account an instance of Account: ', (account instanceof Account))