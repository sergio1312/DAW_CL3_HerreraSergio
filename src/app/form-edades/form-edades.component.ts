import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-edades',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-edades.component.html',
  styleUrl: './form-edades.component.scss'
})
export class FormEdadesComponent {

  edadDelMayor: number = 0
  edadDelMenor: number = 0
  diferenciaEdades: number = 0

  calcularDiferenciaEdades() {
    if (this.edadDelMayor >= this.edadDelMenor) {
      this.diferenciaEdades = this.edadDelMayor - this.edadDelMenor
    } else {
      this.diferenciaEdades = this.edadDelMenor - this.edadDelMayor
    }
  }
}
