import { Routes } from '@angular/router';
import { FormLlamadasComponent } from './form-llamadas/form-llamadas.component';
import { FormEdadesComponent } from './form-edades/form-edades.component';
import { FormNumerosComponent } from './form-numeros/form-numeros.component';
import { FormCaracteresComponent } from './form-caracteres/form-caracteres.component';

export const routes: Routes = [
    { path: 'form-llamadas', component: FormLlamadasComponent },
  { path: 'form-edades', component: FormEdadesComponent },
  { path: 'form-numeros', component: FormNumerosComponent },
  { path: 'form-caracteres', component: FormCaracteresComponent },
];
