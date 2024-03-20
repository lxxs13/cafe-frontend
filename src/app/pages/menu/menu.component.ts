import { Component, OnInit } from '@angular/core';
import { CoffeeModel } from '../../models/coffee.model';
import { CoffeeService } from '../../services/coffee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ComponentsModule, FormsModule],
  providers: [CoffeeService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  private _coffeeList: CoffeeModel[] = [];
  public coffeeListToDisplay: CoffeeModel[] = [];
  public selectedOption: string = 'allProducts';

  constructor(private _coffeService: CoffeeService) { }

  ngOnInit(): void {
    this._coffeService.getCoffeData().subscribe({
      next: (data) => {
        this._coffeeList = data;
        this.coffeeListToDisplay = this._coffeeList;
      }
    })
  }

  filterCoffeList(): void {
    switch (this.selectedOption) {
      case 'allProducts':
        this.coffeeListToDisplay = this._coffeeList;
        break;
      case 'availableNow':
        this.coffeeListToDisplay = this._coffeeList.filter(coffee => coffee.available);
        break;
    }
  }
}
