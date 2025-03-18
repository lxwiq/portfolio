import { Component } from '@angular/core';
import { FooterComponent } from '../../features/components/footer/footer.component';

interface Stack {
  logo: string | SVGElement;
  name: string;
}

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {
  stacks = [
    {
      logo: 'angular',
      name: 'Angular',
    },
    {
      logo: 'ionic',
      name: 'Ionic',
    },
    {
      logo: 'capacitor',
      name: 'Capacitor',
    },
    {
      logo: 'firebase',
      name: 'Firebase',
    },
  ];
}
