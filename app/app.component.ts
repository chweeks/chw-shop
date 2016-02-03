import {Component} from 'angular2/core';
import {Product} from './product';
import {ShoppingCartComponent} from './shopping-cart.component'
import {ProductService} from './product.service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'my-app',
  providers: [ProductService],
  template: `<h1>{{title}}</h1>
             <shopping-cart [items]='productsInCart'></shopping-cart>
             <ul>
               <li *ngFor='#product of products'>
                 <h3>Product Details: {{product.name}}</h3>
                 <p>Price: £{{product.price}}</p>
                 <p>Category: {{product.category}}</p>
                 <p>Quantity In Stock: {{product.quantityInStock}}</p>
                 <button (click)='addToBasket(product)'>Add To Basket</button>
               </li>
             </ul>
             `
})

export class AppComponent implements OnInit {
  public title = 'CHW Shop';
  public products: Product[];
  public productsInCart: Product[];

  constructor(private _productService: ProductService) { };

  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

  addToBasket(product) {
    this.productsInCart.push(product);
  }
}
