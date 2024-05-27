import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
    <button> {{  value  }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; display:flex; justify-content:center; align-items: center; font-size: 50px !important; border-radius: 0; -webkit-appearance: none;}']
})
export class SquareComponent {

  @Input()
  value: 'X' | 'O' | undefined;
  
}
