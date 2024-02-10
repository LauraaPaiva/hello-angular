import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Simba', type: 'Lion', age: 10 },
    { name: 'Tigrão', type: 'Tiger', age: 20 },
    { name: 'Dumbo', type: 'Elephant', age: 30 },
    { name: 'Martin', type: 'Zebra', age: 40 },
    { name: 'Spirit', type: 'Horse', age: 50 },
  ];

  animalDetails: string = '';

  showType(animal: Animal) {
    this.animalDetails = 'O ' + animal.name + ' é um ' + animal.type;
  }
}