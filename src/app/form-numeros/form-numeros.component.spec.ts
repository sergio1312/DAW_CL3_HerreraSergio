import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNumerosComponent } from './form-numeros.component';

describe('FormNumerosComponent', () => {
  let component: FormNumerosComponent;
  let fixture: ComponentFixture<FormNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNumerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
