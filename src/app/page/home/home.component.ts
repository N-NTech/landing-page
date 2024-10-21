import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardPlanComponent } from '../../components/card-plan/card-plan.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CardPlanComponent,AccordionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
