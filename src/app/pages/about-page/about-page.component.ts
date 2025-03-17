import {Component} from '@angular/core';
import {FooterComponent} from '../../features/components/footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
})
export class AboutPageComponent {}
