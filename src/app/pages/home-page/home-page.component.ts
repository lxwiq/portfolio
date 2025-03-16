import {Component} from '@angular/core';
import {RoundedButtonComponent} from '../../features/components/rounded-button/rounded-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RoundedButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
