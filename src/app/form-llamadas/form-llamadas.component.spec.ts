import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLlamadasComponent } from './form-llamadas.component';

describe('FormLlamadasComponent', () => {
  let component: FormLlamadasComponent;
  let fixture: ComponentFixture<FormLlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLlamadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormLlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
