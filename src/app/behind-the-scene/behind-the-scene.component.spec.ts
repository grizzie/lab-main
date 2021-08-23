import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehindTheSceneComponent } from './behind-the-scene.component';

describe('BehindTheSceneComponent', () => {
  let component: BehindTheSceneComponent;
  let fixture: ComponentFixture<BehindTheSceneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehindTheSceneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehindTheSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
