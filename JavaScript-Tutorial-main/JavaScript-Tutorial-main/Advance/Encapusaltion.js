class BankAccount{
    #balance = 0;
    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        } else {
            console.log("Deposit amount must be positive");
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
        } else {
            console.log("Invalid withdrawal amount");
        }
    }
    getBalance(){
        return this.#balance;
    }
}
const myAccount = new BankAccount();
myAccount.deposit(1000);
console.log(`Current Balance: $${myAccount.getBalance()}`);