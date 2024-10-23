import { Transaction } from '../../core/transaction';
import { TransactionRepository } from '../../core/transaction-repository';
import { Clock } from '../../core/clock';

describe('The Transaction Repository', () => {
	const today = '25/03/2022';
	const clock = new Clock();
	clock.todayAsString = () => today;
	let repository;

	beforeEach(() => {
		repository = new TransactionRepository(clock);
	});

	it('stores a deposit transaction for a given amount', () => {
		const amount = 100;
		repository.addDeposit(amount);

		const transactions = repository.allTransactions();
		expect(transactions[0]).toEqual(new Transaction(today, amount));
	});

	it('stores a withdrawal transaction for a given amount', () => {
		const amount = 100;
		repository.addWithdrawal(amount);

		const transactions = repository.allTransactions();
		expect(transactions[0]).toEqual(new Transaction(today, -amount));
	});
});
