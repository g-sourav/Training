import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizButtonComponent } from './create-quiz-button.component';

describe('CreateQuizButtonComponent', () => {
  let component: CreateQuizButtonComponent;
  let fixture: ComponentFixture<CreateQuizButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuizButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
