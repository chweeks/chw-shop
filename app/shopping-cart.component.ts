import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
  selector: 'shopping-cart';
  inputs: ['productsInCart'];
  template: `<h1>Shopping Cart</h1>
             `
})

export class ShoppingCartComponent {
  public title: 'Shopping Cart';
  public productsInCart: Product[];
}
