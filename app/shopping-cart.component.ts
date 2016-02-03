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
               <button (click)='applyDiscount(5)'>£5.00 Off</button>
               <button (click)='applyDiscount(10)'>£10.00 Off</button>
               <button (click)='applyDiscount(15)'>£15.00 Off</button>
               <p>Cart Total <span *ngIf='discountsApplied()'>With Discount</span>: £{{cartTotal()}}</p>
             </div>
             `
})

export class ShoppingCartComponent {
  public title = 'Shopping Cart';
  public items: Product[];
  public total: number;
  public discounts: number = 0;

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
    this.total = 0;
    for(var item in this.items){
      this.total += this.items[item].price;
    };
    this.total -= this.discounts;
    return this.total;
  }

  applyDiscount(ammount) {
    this.discounts += ammount;
  }

  discountsApplied() {
    return this.discounts > 0;
  }
}
