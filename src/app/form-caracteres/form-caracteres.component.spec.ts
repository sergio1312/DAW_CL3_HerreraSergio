import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCaracteresComponent } from './form-caracteres.component';

describe('FormCaracteresComponent', () => {
  let component: FormCaracteresComponent;
  let fixture: ComponentFixture<FormCaracteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCaracteresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
