import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-cardservice',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cardservice.component.html',
  styleUrl: './cardservice.component.css'
})
export class CardserviceComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verifica si el entorno es el navegador antes de inicializar AOS
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}