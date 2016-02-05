import {Component} from 'angular2/core';
import {Product} from '../product';

@Component({
  selector: 'shopping-cart',
  inputs: ['items'],
  templateUrl: 'app/templates/shopping-cart.html',
  styleUrls: ['app/styles/shopping-cart.css']
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
    for(let item in this.items){
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
    return this.items.length == 0;
  }

  cartTotal() {
    this.total = 0;
    for(let item in this.items){
      this.total += this.items[item].price;
    };
    this.applyDiscounts();
    return this.total.toFixed(2);
  }

  applyDiscounts() {
    this.total -= this.discounts;
  }

  hasBought(string){
    for(let item in this.items){
      return this.items[item].category.indexOf(string) >= 0
    }
  }

  tenPoundDiscountIsApplicable() {
    return this.total > 50
  }

  fifteenPoundDiscountIsApplicable() {
    return this.total > 75 && this.hasBought('Footwear');
  }

  invalidVoucher() {
    alert('You do not qualify for this discount');
  }

  apply5PoundDiscount() {
    this.fivePoundDiscountApplied = true;
    this.discounts += 5;
  }

  apply10PoundDiscount() {
    if(this.tenPoundDiscountIsApplicable()) {
      this.tenPoundDiscountApplied = true;
      this.discounts += 10;
    }
    else {
      this.invalidVoucher();
    };
  }

  apply15PoundDiscount() {
    if(this.fifteenPoundDiscountIsApplicable()) {
      this.fifteenPoundDiscountApplied = true;
      this.discounts += 15;
    }
    else {
      this.invalidVoucher();
    };
  }

  discountApplied() {
    return this.discounts > 0;
  }

  allDiscountsApplied() {
    return this.fivePoundDiscountApplied && this.tenPoundDiscountApplied && this.fifteenPoundDiscountApplied;
  }
}
