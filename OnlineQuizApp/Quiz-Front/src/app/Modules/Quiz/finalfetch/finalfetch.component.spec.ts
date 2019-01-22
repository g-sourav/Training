import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalfetchComponent } from './finalfetch.component';

describe('FinalfetchComponent', () => {
  let component: FinalfetchComponent;
  let fixture: ComponentFixture<FinalfetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalfetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
