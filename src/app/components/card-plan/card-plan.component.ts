import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Plan } from '../../interfaces/plan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './card-plan.component.html',
  styleUrl: './card-plan.component.css'
})
export class CardPlanComponent {

  listPlanes: Plan[]

  constructor() {
    this.listPlanes = [
      {nombre:'Basic',precio:15000,descripcion:["Web Estática","Ancho de banda limitado","Diseño Profesional","Alojamiento Web","Soporte Técnico"]},
      {nombre:'Pro',precio:25000,descripcion:["Web Dinamica","Ancho de banda limitado","Diseño Profesional","Alojamiento Web","Soporte Técnico"]},
      {nombre:'Premium',precio:0,descripcion:["Web Estática","Ancho de banda limitado","Diseño Profesional","Alojamiento Web","Soporte Técnico"]}
    ]
  }

}
