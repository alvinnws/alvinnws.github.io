import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUTDCoursesComponent } from './sutdcourses.component';

describe('SUTDCoursesComponent', () => {
  let component: SUTDCoursesComponent;
  let fixture: ComponentFixture<SUTDCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SUTDCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUTDCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
