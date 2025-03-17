import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  standalone: true,
  imports: [],
  styleUrls: ['./rounded-button.component.scss'],
  template: `
    <a class="btn" href="">{{label}}</a>
  `,
})
export class RoundedButtonComponent {
  @Input() link = '';
  @Input() label = 'btn';
}
