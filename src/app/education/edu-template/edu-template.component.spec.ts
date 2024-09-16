import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduTemplateComponent } from './edu-template.component';

describe('EduTemplateComponent', () => {
  let component: EduTemplateComponent;
  let fixture: ComponentFixture<EduTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
