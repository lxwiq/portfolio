import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  standalone: true,
  imports: [],
  templateUrl: './rounded-button.component.html',
  styleUrl: './rounded-button.component.scss',
})
export class RoundedButtonComponent {
  @Input() label = 'btn';
}
