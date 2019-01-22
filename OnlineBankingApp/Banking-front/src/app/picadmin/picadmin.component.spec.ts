import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicadminComponent } from './picadmin.component';

describe('PicadminComponent', () => {
  let component: PicadminComponent;
  let fixture: ComponentFixture<PicadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
