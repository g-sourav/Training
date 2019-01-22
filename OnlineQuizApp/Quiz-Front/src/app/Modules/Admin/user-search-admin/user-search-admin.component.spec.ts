import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchAdminComponent } from './user-search-admin.component';

describe('UserSearchAdminComponent', () => {
  let component: UserSearchAdminComponent;
  let fixture: ComponentFixture<UserSearchAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
