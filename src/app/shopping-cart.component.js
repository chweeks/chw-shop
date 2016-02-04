System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingCartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingCartComponent = (function () {
                function ShoppingCartComponent() {
                    this.title = 'Shopping Cart';
                    this.discounts = 0;
                }
                ShoppingCartComponent.prototype.removeFromCart = function (itemToRemove) {
                    for (var item in this.items) {
                        if (itemToRemove.id == this.items[item].id) {
                            this.items.splice(item, 1);
                        }
                    }
                    ;
                    this.resetDiscounts();
                };
                ShoppingCartComponent.prototype.resetDiscounts = function () {
                    this.fivePoundDiscountApplied = false;
                    this.tenPoundDiscountApplied = false;
                    this.fifteenPoundDiscountApplied = false;
                    this.discounts = 0;
                };
                ShoppingCartComponent.prototype.cartEmpty = function () {
                    return this.items.length == 0;
                };
                ShoppingCartComponent.prototype.cartTotal = function () {
                    this.total = 0;
                    for (var item in this.items) {
                        this.total += this.items[item].price;
                    }
                    ;
                    this.applyDiscounts();
                    return this.total.toFixed(2);
                };
                ShoppingCartComponent.prototype.applyDiscounts = function () {
                    this.total -= this.discounts;
                };
                ShoppingCartComponent.prototype.hasBought = function (string) {
                    for (var item in this.items) {
                        return this.items[item].category.indexOf(string) >= 0;
                    }
                };
                ShoppingCartComponent.prototype.tenPoundDiscountIsApplicable = function () {
                    return this.total > 50;
                };
                ShoppingCartComponent.prototype.fifteenPoundDiscountIsApplicable = function () {
                    return this.total > 75 && this.hasBought('Footwear');
                };
                ShoppingCartComponent.prototype.apply5PoundDiscount = function () {
                    this.fivePoundDiscountApplied = true;
                    this.discounts += 5;
                };
                ShoppingCartComponent.prototype.apply10PoundDiscount = function () {
                    if (this.tenPoundDiscountIsApplicable()) {
                        this.tenPoundDiscountApplied = true;
                        this.discounts += 10;
                    }
                    else {
                        alert('You do not qualify for this discount');
                    }
                    ;
                };
                ShoppingCartComponent.prototype.apply15PoundDiscount = function () {
                    if (this.fifteenPoundDiscountIsApplicable()) {
                        this.fifteenPoundDiscountApplied = true;
                        this.discounts += 15;
                    }
                    else {
                        alert('You do not qualify for this discount');
                    }
                    ;
                };
                ShoppingCartComponent.prototype.discountsApplied = function () {
                    return this.discounts > 0;
                };
                ShoppingCartComponent.prototype.allDiscountsApplied = function () {
                    return this.fivePoundDiscountApplied && this.tenPoundDiscountApplied && this.fifteenPoundDiscountApplied;
                };
                ShoppingCartComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-cart',
                        inputs: ['items'],
                        template: "<h2>{{title}}</h2>\n             <p class='red' *ngIf='cartEmpty()'>Empty</p>\n             <div class='itemInCart' *ngFor='#item of items'>\n               <span>{{item.name}}: <span class='price'>\u00A3{{item.price}}</span></span>\n               <span>\n                 <button class='removeButton' (click)='removeFromCart(item)'>\n                   x\n                 </button>\n               </span>\n             </div>\n             <div *ngIf!='cartEmpty()'>\n               <p *ngIf!='allDiscountsApplied()'>Vouchers!</p>\n               <button *ngIf!='fivePoundDiscountApplied' (click)='apply5PoundDiscount()'>\u00A35.00 Off</button>\n               <button *ngIf!='tenPoundDiscountApplied' (click)='apply10PoundDiscount()'>\u00A310.00 Off</button>\n               <button *ngIf!='fifteenPoundDiscountApplied' (click)='apply15PoundDiscount()'>\u00A315.00 Off</button>\n               <p class='price'>Cart Total <span *ngIf='discountsApplied()'>With Discount</span>: \u00A3{{cartTotal()}}</p>\n             </div>\n            ",
                        styleUrls: ['app/shopping-cart.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingCartComponent);
                return ShoppingCartComponent;
            })();
            exports_1("ShoppingCartComponent", ShoppingCartComponent);
        }
    }
});
//# sourceMappingURL=shopping-cart.component.js.map