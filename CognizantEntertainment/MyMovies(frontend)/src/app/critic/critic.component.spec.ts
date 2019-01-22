import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticComponent } from './critic.component';

describe('CriticComponent', () => {
  let component: CriticComponent;
  let fixture: ComponentFixture<CriticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
