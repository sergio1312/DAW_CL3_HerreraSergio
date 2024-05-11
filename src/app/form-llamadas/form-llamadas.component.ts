import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-llamadas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-llamadas.component.html',
  styleUrl: './form-llamadas.component.scss'
})
export class FormLlamadasComponent {
  minutos: number = 0
  costoTotal: number = 0

  calcularCosto() {
    if (this.minutos <= 5) {
      this.costoTotal = 10
    } else {
      const minutosAdicionales = this.minutos - 5
      this.costoTotal = 10 + (minutosAdicionales * 2)
    }
  }
}
