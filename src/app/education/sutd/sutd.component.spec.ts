import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUTDComponent } from './sutd.component';

describe('SUTDComponent', () => {
  let component: SUTDComponent;
  let fixture: ComponentFixture<SUTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SUTDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SUTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
