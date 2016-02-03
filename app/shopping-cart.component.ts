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
               <p *ngIf!='allDiscountsApplied()'>Vouchers!</p>
               <button *ngIf!='fivePoundDiscountApplied' (click)='apply5PoundDiscount()'>£5.00 Off</button>
               <button *ngIf!='tenPoundDiscountApplied' (click)='apply10PoundDiscount()'>£10.00 Off</button>
               <button *ngIf!='fifteenPoundDiscountApplied' (click)='apply15PoundDiscount()'>£15.00 Off</button>
               <p>Cart Total <span *ngIf='discountsApplied()'>With Discount</span>: £{{cartTotal()}}</p>
             </div>
            `
})

export class ShoppingCartComponent {
  public title = 'Shopping Cart';
  public items: Product[];
  public total: number;
  public discounts: number = 0;
  public fivePoundDiscountApplied: boolean;
  public tenPoundDiscountApplied: boolean;
  public fifteenPoundDiscountApplied: boolean;

  removeFromCart(itemToRemove) {
    for(var item in this.items){
      if(itemToRemove.id == this.items[item].id){
        this.items.splice(item, 1)
      }
    };
    this.resetDiscounts();
  }

  resetDiscounts() {
    this.fivePoundDiscountApplied = false;
    this.tenPoundDiscountApplied = false;
    this.fifteenPoundDiscountApplied = false;
    this.discounts = 0;
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

  hasBought(string){
    for(var item in this.items){
      return this.items[item].category.indexOf(string) >= 0
    }
  }

  tenPoundDiscountIsApplicable() {
    return this.total > 50
  }

  fifteenPoundDiscountIsApplicable() {
    return this.total > 75 && this.hasBought('Footwear');
  }

  apply5PoundDiscount() {
    this.fivePoundDiscountApplied = true;
    this.discounts += 5;
  }

  apply10PoundDiscount() {
    if(this.tenPoundDiscountIsApplicable()) {
      this.tenPoundDiscountApplied = true;
      this.discounts += 10;
    }else {
      alert('You do not qualify for this discount')
    };
  }

  apply15PoundDiscount() {
    if(this.fifteenPoundDiscountIsApplicable()) {
      this.fifteenPoundDiscountApplied = true;
      this.discounts += 15;
    }else {
      alert('You do not qualify for this discount')
    };
  }

  discountsApplied() {
    return this.discounts > 0;
  }

  allDiscountsApplied() {
    return this.fivePoundDiscountApplied && this.tenPoundDiscountApplied && this.fifteenPoundDiscountApplied
  }
}
