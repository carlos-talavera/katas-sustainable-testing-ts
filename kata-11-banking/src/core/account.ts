import { TransactionRepository } from './transaction-repository';
import { StatementPrinter } from './statement-printer';

export class Account {
	constructor(private repository: TransactionRepository, private statementPrinter: StatementPrinter) {}

	deposit(number: number) {
		this.repository.addDeposit(number);
	}

	withdraw(number: number) {
		this.repository.addWithdrawal(number);
	}

	printStatement() {
		this.statementPrinter.print(this.repository.allTransactions());
	}
}
