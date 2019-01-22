import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboadComponent } from './userdashboad.component';

describe('UserdashboadComponent', () => {
  let component: UserdashboadComponent;
  let fixture: ComponentFixture<UserdashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
