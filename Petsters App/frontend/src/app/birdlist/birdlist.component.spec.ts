import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdlistComponent } from './birdlist.component';

describe('BirdlistComponent', () => {
  let component: BirdlistComponent;
  let fixture: ComponentFixture<BirdlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
