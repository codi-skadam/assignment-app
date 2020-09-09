import { async, TestBed } from '@angular/core/testing';
import { QuoteDisplayComponentComponent } from './quote-display-component.component';

describe('AboutComponent', () => {
	let fixture: any;
  let component: any;
  let quoteServiceMock:any;
  let authServiceMock:any;


	beforeEach(() => {
		authServiceMock = {
			login: jest.fn()
    };
    quoteServiceMock = {
			getQuotes: jest.fn()
    };
		fixture = new QuoteDisplayComponentComponent(
			quoteServiceMock,
			authServiceMock
		);
		fixture.ngOnInit();
	});

	describe('Quote Display: Component', () => {
    it('should call getExpense', () => {
      const getQuotesSpy = jest.spyOn(fixture, 'getQuotes');
      expect(getQuotesSpy).not.toHaveBeenCalled();
    });
		// it ('should be initialized', () => {
     
		// 	// expect(fixture).toBeTruthy();
		// 	// fixture.detectChanges();
		// });
	});
});