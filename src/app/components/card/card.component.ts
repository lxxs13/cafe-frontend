import { Component, Input } from '@angular/core';
import { CoffeeModel } from '../../models/coffee.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() coffeeData!: CoffeeModel;

}
