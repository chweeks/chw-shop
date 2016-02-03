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
                }
                ShoppingCartComponent.prototype.removeFromCart = function (itemToRemove) {
                    for (var item in this.items) {
                        if (itemToRemove.id == this.items[item].id) {
                            this.items.splice(item, 1);
                        }
                    }
                    ;
                };
                ShoppingCartComponent.prototype.cartEmpty = function () {
                    return this.items.length > 0;
                };
                ShoppingCartComponent.prototype.cartTotal = function () {
                    var total = 0;
                    for (var item in this.items) {
                        total += this.items[item].price;
                    }
                    ;
                    return total;
                };
                ShoppingCartComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-cart',
                        inputs: ['items'],
                        template: "<h1>{{title}} {{items.length}}</h1>\n             <ul>\n               <li *ngFor='#item of items'>\n                 <p>{{item.name}}</p>\n                 <button (click)='removeFromCart(item)'>\n                   Remove From Cart\n                 </button>\n               </li>\n             </ul>\n             <div *ngIf='cartEmpty()'>\n               <p>Vouchers!</p>\n               <button>\u00A35.00 Off</button>\n               <button>\u00A310.00 Off</button>\n               <button>\u00A315.00 Off</button>\n               <p>Cart Total: \u00A3{{cartTotal()}}</p>\n               <p>Cart Total With Discount: \u00A3</p>\n             </div>\n             "
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