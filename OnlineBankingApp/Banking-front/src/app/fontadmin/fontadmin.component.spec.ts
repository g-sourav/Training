import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontadminComponent } from './fontadmin.component';

describe('FontadminComponent', () => {
  let component: FontadminComponent;
  let fixture: ComponentFixture<FontadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
