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
    var AppComponent, PRODUCTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'CHW Shop';
                    this.products = PRODUCTS;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>{{title}}</h1>\n             <ul>\n               <li *ngFor='#product of products'>\n                 <h3>Product Details: {{product.name}}</h3>\n                 <p>Price: \u00A3{{product.price}}</p>\n                 <p>Category: {{product.category}}</p>\n                 <p>Quantity In Stock: {{product.quantityInStock}}</p>\n               </li>\n             </ul>\n             "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            PRODUCTS = [
                { id: 1,
                    name: 'Almond Toe Court Shoes, Patent Black',
                    price: 99.00,
                    category: 'Women’s Footwear',
                    quantityInStock: 5
                },
                { id: 2,
                    name: 'Suede Shoes, Blue',
                    price: 42.00,
                    category: 'Womens Footwear',
                    quantityInStock: 4
                },
                { id: 3,
                    name: 'Leather Driver Saddle Loafers, Tan',
                    price: 34.00,
                    category: 'Men’s Footwear',
                    quantityInStock: 12,
                },
                { id: 4,
                    name: 'Flip Flops, Red',
                    price: 19.00,
                    category: 'Men’s Footwear',
                    quantityInStock: 6,
                },
                { id: 5,
                    name: 'Flip Flops, Blue',
                    price: 19.00,
                    category: 'Men’s Footwear',
                    quantityInStock: 0
                },
                { id: 6,
                    name: 'Gold Button Cardigan, Black',
                    price: 167.00,
                    category: 'Women’s Casualwear',
                    quantityInStock: 6
                },
                { id: 7,
                    name: 'Cotton Shorts, Medium Red',
                    price: 30.00,
                    category: 'Women’s Casualwear',
                    quantityInStock: 5
                },
                { id: 8,
                    name: 'Fine Stripe Short Sleeve Shirt, Grey',
                    price: 49.99,
                    category: 'Men’s Casualwear',
                    quantityInStock: 9
                },
                { id: 9,
                    name: 'Fine Stripe Short Sleeve Shirt, Green',
                    price: 39.99,
                    category: 'Men’s Casualwear',
                    quantityInStock: 3
                },
                { id: 10,
                    name: 'Sharkskin Waistcoat, Charcoal',
                    price: 75.00,
                    category: 'Men’s Formalwear',
                    quantityInStock: 2
                },
                { id: 11,
                    name: 'Lightweight Patch Pocket Blazer, Deer',
                    price: 175.50,
                    category: 'Men’s Formalwear',
                    quantityInStock: 1
                },
                { id: 12,
                    name: 'Bird Print Dress, Black',
                    price: 270.00,
                    category: 'Women’s Formalwear',
                    quantityInStock: 10
                },
                { id: 13,
                    name: 'Mid Twist Cut-Out Dress, Pink',
                    price: 540.00,
                    category: 'Women’s Formalwear',
                    quantityInStock: 5
                },
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map