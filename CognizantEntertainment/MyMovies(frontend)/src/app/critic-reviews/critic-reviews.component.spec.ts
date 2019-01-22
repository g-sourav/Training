import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticReviewsComponent } from './critic-reviews.component';

describe('CriticReviewsComponent', () => {
  let component: CriticReviewsComponent;
  let fixture: ComponentFixture<CriticReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
