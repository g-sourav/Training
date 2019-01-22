import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetregComponent } from './petreg.component';
import { FormsModule } from '@angular/forms';

describe('PetregComponent', () => {
  let component: PetregComponent;
  let fixture: ComponentFixture<PetregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ PetregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
