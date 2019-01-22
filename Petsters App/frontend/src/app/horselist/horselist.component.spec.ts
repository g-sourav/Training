import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorselistComponent } from './horselist.component';

describe('HorselistComponent', () => {
  let component: HorselistComponent;
  let fixture: ComponentFixture<HorselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
