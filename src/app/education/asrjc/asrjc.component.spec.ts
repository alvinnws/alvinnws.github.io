import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASRJCComponent } from './asrjc.component';

describe('ASRJCComponent', () => {
  let component: ASRJCComponent;
  let fixture: ComponentFixture<ASRJCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASRJCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASRJCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
