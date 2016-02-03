import {Component} from 'angular2/core';
import {Product} from './product';

@Component({
  selector: 'shopping-cart',
  inputs: ['items'],
  template: `<h1>{{title}} {{items.length}}</h1>
             <ul>
               <li *ngFor='#item of items'>
                 <p>{{item.name}}</p>
                 <button (click)='removeFromCart(item)'>
                   Remove From Cart
                 </button>
               </li>
             </ul>
             <div *ngIf='cartEmpty()'>
               <p>Vouchers!</p>
               <button>£5.00 Off</button>
               <button>£10.00 Off</button>
               <button>£15.00 Off</button>
               <p>Cart Total: £{{cartTotal()}}</p>
               <p>Cart Total With Discount: £</p>
             </div>
             `
})

export class ShoppingCartComponent {
  public title = 'Shopping Cart';
  public items: Product[];

  removeFromCart(itemToRemove) {
    for(var item in this.items){
      if(itemToRemove.id == this.items[item].id){
        this.items.splice(item, 1)
      }
    };
  }

  cartEmpty() {
    return this.items.length > 0;
  }

  cartTotal() {
    var total = 0;
    for(var item in this.items){
      total += this.items[item].price;
    };
    return total;
  }
}
