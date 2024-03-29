import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  familyName: string = 'Paiva';
  @Input() name: string = '';
  @Input() trajeto!: {
    primeiraCidade: string;
    segundaCidade: string;
    terceiraCidade: string;
    quartaCidade: string;
    quintaCidade: string;
  };
}
