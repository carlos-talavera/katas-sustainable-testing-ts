import { Account } from '../../core/account';
import { Console } from '../../core/console';
import { TransactionRepository } from '../../core/transaction-repository';
import { StatementPrinter } from '../../core/statement-printer';
import { Clock } from '../../core/clock';

describe('Print Statement', () => {
	const console = new Console();
	const consoleSpy = jest.spyOn(console, 'log');
	const clock = new Clock();
	clock.todayAsString = jest
		.fn()
		.mockReturnValueOnce('10/01/2022')
		.mockReturnValueOnce('13/01/2022')
		.mockReturnValueOnce('14/01/2022');
	const repository = new TransactionRepository(clock);
	const statementPrinter = new StatementPrinter(console);
	const account = new Account(repository, statementPrinter);

	it('prints an account statement including the transactions made throughout the console', () => {
		account.deposit(1000);
		account.withdraw(500);
		account.deposit(2000);

		account.printStatement();

		expect(consoleSpy).toHaveBeenCalledWith('Date | Amount | Balance');
		expect(consoleSpy).toHaveBeenCalledWith('14/01/2022 | 2000.00 | 2500.00');
		expect(consoleSpy).toHaveBeenCalledWith('13/01/2022 | -500.00 | 500.00');
		expect(consoleSpy).toHaveBeenCalledWith('10/01/2022 | 1000.00 | 1000.00');
	});
});
