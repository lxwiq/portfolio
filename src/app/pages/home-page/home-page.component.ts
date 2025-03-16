import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoundedButtonComponent} from '../../features/components/rounded-button/rounded-button.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RoundedButtonComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
