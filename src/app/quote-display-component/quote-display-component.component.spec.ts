import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDisplayComponentComponent } from './quote-display-component.component';

describe('QuoteDisplayComponentComponent', () => {
  let component: QuoteDisplayComponentComponent;
  let fixture: ComponentFixture<QuoteDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDisplayComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
