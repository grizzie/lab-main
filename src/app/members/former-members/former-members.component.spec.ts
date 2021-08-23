import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerMembersComponent } from './former-members.component';

describe('FormerMembersComponent', () => {
  let component: FormerMembersComponent;
  let fixture: ComponentFixture<FormerMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormerMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
