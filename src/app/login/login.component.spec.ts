import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
	let fixture: LoginComponent;
	let authServiceMock: any;
	let formBuilderMock: FormBuilder;
	let routerMock: any;

	beforeEach(() => {
		authServiceMock = {
			login: jest.fn()
		};
		formBuilderMock = new FormBuilder();
		routerMock = jest.fn();
		fixture = new LoginComponent(
			formBuilderMock,
			authServiceMock,
			routerMock
		);
		fixture.ngOnInit();
	});

	describe('Test: ngOnInit', () => {
		it('should initialize loginForm', () => {
			const loginForm = {
				username: '',
				password: ''
			};
			expect(fixture.loginForm.value).toEqual(loginForm);
		});
	});
});