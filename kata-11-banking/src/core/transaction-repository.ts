import { Clock } from './clock';
import { Transaction } from './transaction';

export class TransactionRepository {
	transactions: Transaction[] = [];
	constructor(private clock: Clock) {}

	allTransactions() {
		return this.transactions;
	}

	addDeposit(amount: number) {
		const transaction = new Transaction(this.clock.todayAsString(), amount);
		this.transactions.push(transaction);
	}

	addWithdrawal(amount: number) {
		const transaction = new Transaction(this.clock.todayAsString(), -amount);
		this.transactions.push(transaction);
	}
}
