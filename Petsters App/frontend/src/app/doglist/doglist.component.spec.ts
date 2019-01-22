import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoglistComponent } from './doglist.component';

describe('DoglistComponent', () => {
  let component: DoglistComponent;
  let fixture: ComponentFixture<DoglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
