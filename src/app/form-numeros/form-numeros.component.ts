import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-numeros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-numeros.component.html',
  styleUrl: './form-numeros.component.scss'
})
export class FormNumerosComponent {
  numero:number = 0
  resultado:string =''

  verificarCapicua() {
    const numeroString = this.numero.toString()
    const longitud = numeroString.length
    
    if (longitud === 2 && numeroString[0] === numeroString[1]) {
      this.resultado = 'El numero ingresado es capicua'
    } else {
      this.resultado = 'El numero ingresado no es capicua'
    }
  }

}
