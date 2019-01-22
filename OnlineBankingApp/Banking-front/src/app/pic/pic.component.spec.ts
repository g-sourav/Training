import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicComponent } from './pic.component';

describe('PicComponent', () => {
  let component: PicComponent;
  let fixture: ComponentFixture<PicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
