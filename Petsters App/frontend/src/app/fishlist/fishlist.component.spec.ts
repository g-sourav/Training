import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishlistComponent } from './fishlist.component';

describe('FishlistComponent', () => {
  let component: FishlistComponent;
  let fixture: ComponentFixture<FishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
