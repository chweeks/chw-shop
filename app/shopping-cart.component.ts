import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
  selector: 'shopping-cart',
  inputs: ['items'],
  template: `<h1>{{title}} {{items.length}}</h1>
             <ul>
               <li *ngFor='#item of items'>
                 <p>{{item.name}}</p>
               </li>
             </ul>
             <p *ngIf='cartEmpty(items)'>Cart Total: £{{cartTotal(items)}}</p>
             `
})

export class ShoppingCartComponent {
  public title = 'Shopping Cart';
  public items: Product[];

  cartEmpty(items) {
    return items.length > 0;
  }

  cartTotal(items) {
    var total = 0;
    for(var i=0; i<items.length; i++){
      total += items[i].price;
    }
    return total;
  }
}
