class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            console.log(`Deposited ${amt} into account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withDraw(amt) {
        if (amt > 0 && amt <= this.balance) {
            this.balance -= amt;
            console.log(`Withdraw ${amt} from account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdraw amount");
        }
    }
}

const a = new BankAccount("123456", "John Doe", 1000);
a.deposit(500);
a.withDraw(200);
