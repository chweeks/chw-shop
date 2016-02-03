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
                ShoppingCartComponent.prototype.cartEmpty = function (items) {
                    return items.length > 0;
                };
                ShoppingCartComponent.prototype.cartTotal = function (items) {
                    var total = 0;
                    for (var i = 0; i < items.length; i++) {
                        total += items[i].price;
                    }
                    return total;
                };
                ShoppingCartComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-cart',
                        inputs: ['items'],
                        template: "<h1>{{title}} {{items.length}}</h1>\n             <ul>\n               <li *ngFor='#item of items'>\n                 <p>{{item.name}}</p>\n               </li>\n             </ul>\n             <p *ngIf='cartEmpty(items)'>Cart Total: \u00A3{{cartTotal(items)}}</p>\n             "
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