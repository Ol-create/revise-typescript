"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid balance");
        this._balance = value;
    }
}
let account = new Account(1, 'Oluyemi', 100);
console.log(account);
console.log(account.balance);
console.log('New balance = ', account.balance = 300);
console.log('Is account an instance of Account: ', (account instanceof Account));
//# sourceMappingURL=index.js.map