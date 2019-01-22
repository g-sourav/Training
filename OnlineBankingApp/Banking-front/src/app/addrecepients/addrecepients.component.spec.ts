import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecepientsComponent } from './addrecepients.component';

describe('AddrecepientsComponent', () => {
  let component: AddrecepientsComponent;
  let fixture: ComponentFixture<AddrecepientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecepientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecepientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
