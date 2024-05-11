import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-caracteres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-caracteres.component.html',
  styleUrl: './form-caracteres.component.scss'
})
export class FormCaracteresComponent {
  caracteres:string[] = []

  constructor() {
    this.generarTabla()
  }

  generarTabla() {
    for (let i = 32; i < 165; i++) {
      if (i < 97 || i > 122) {
        this.caracteres.push(String.fromCharCode(i))
      }
    }
  }

}
