import { Component } from '@angular/core';
import { FooterComponent } from '../../features/components/footer/footer.component';
import { RoundedButtonComponent } from '../../features/components/rounded-button/rounded-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RoundedButtonComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
