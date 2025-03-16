import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {RoundedButtonComponent} from '../../features/components/rounded-button/rounded-button.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink, RoundedButtonComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {}
