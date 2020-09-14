import { SnackBarComponent } from './snack-bar.component';

describe('Snackbar', () => {
	let fixture: SnackBarComponent;

	beforeEach(() => {
		fixture = new SnackBarComponent(
		);
	});

	describe('App Component', () => {
	  test ('should be initialized', () => {
			expect(fixture).toBeTruthy();
		});
	});
});