import { RegistrationComponent } from './registration.component';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
	let fixture: RegistrationComponent;
  let authServiceMock: any;
  let snackbarServiceMock: any;
	let formBuilderMock: FormBuilder;
	let routerMock: any;

	beforeEach(() => {
		authServiceMock = {
			login: jest.fn()
    };
    snackbarServiceMock = {
			setSnackbar: jest.fn()
		};
		formBuilderMock = new FormBuilder();
		routerMock = jest.fn();
		fixture = new RegistrationComponent(
			formBuilderMock,
			authServiceMock,
      routerMock,
      snackbarServiceMock
		);
		fixture.ngOnInit();
	});

	describe('Registration Component', () => {
		it('should initialize register form', () => {
			const registerForm = {
				username: '',
				password: ''
			};
			expect(fixture.loginForm.value).toEqual(registerForm);
		});
	});
});