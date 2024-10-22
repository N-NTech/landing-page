import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardPlanComponent } from '../../components/card-plan/card-plan.component';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { CardserviceComponent } from '../../components/cardservice/cardservice.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CardPlanComponent,AccordionComponent,CardserviceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
