import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapppyBirthdayComponent } from './happpy-birthday.component';

describe('HapppyBirthdayComponent', () => {
  let component: HapppyBirthdayComponent;
  let fixture: ComponentFixture<HapppyBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HapppyBirthdayComponent]
    });
    fixture = TestBed.createComponent(HapppyBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
