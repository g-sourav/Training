import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerserviceComponent } from './customerservice.component';

describe('CustomerserviceComponent', () => {
  let component: CustomerserviceComponent;
  let fixture: ComponentFixture<CustomerserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
