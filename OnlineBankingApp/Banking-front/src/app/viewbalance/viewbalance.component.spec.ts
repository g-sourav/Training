import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbalanceComponent } from './viewbalance.component';

describe('ViewbalanceComponent', () => {
  let component: ViewbalanceComponent;
  let fixture: ComponentFixture<ViewbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
