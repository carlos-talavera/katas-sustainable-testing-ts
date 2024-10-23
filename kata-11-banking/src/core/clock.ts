export class Clock {
	todayAsString() {
		return this.today().toLocaleString('es-MX', { year: 'numeric', month: '2-digit', day: '2-digit' });
	}

	protected today() {
		return new Date();
	}
}
