import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdadesComponent } from './form-edades.component';

describe('FormEdadesComponent', () => {
  let component: FormEdadesComponent;
  let fixture: ComponentFixture<FormEdadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEdadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEdadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
