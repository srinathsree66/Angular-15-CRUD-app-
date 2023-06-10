import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditAddComponent } from './employee-edit-add.component';

describe('EmployeeEditAddComponent', () => {
  let component: EmployeeEditAddComponent;
  let fixture: ComponentFixture<EmployeeEditAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeEditAddComponent]
    });
    fixture = TestBed.createComponent(EmployeeEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
