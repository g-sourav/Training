import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshomepageComponent } from './petshomepage.component';

describe('PetshomepageComponent', () => {
  let component: PetshomepageComponent;
  let fixture: ComponentFixture<PetshomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
