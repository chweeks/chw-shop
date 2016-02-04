import {Component} from 'angular2/core';
import {Product} from './product';
import {ShoppingCartComponent} from './shopping-cart.component'
import {ProductService} from './product.service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'my-app',
  providers: [ProductService],
  directives: [ShoppingCartComponent],
  template: `<header><h1>{{title}}</h1></header>
             <div class='container'>
               <div class='productsContainer'>
                 <div class='productContainer' *ngFor='#product of products'>
                   <h3>{{product.name}}</h3>
                   <div class='productDetails'>
                     <p>{{product.category}}</p>
                     <p>Price: £{{product.price}}</p>
                     <p class='red'>{{product.quantityInStock}} In Stock:</p>
                   </div>
                   <button (click)='addToBasket(product)'>Add To Basket</button>
                 </div>
               </div>
               <div class='shoppingCartContainer'>
                <shopping-cart [items]='productsInCart'></shopping-cart>
               </div>
             </div>
             `,
  styleUrls: ['app/products-list.css']
})

export class AppComponent implements OnInit {
  public title = 'Chris, Harry & Weeks Clothing';
  public products: Product[];
  public productsInCart: Product[];

  constructor(private _productService: ProductService) { };

  getProducts() {
    this._productService.getProducts().then(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
    this.productsInCart = [];
  }

  addToBasket(product) {
    if(this.isInStock(product)){
      this.productsInCart.push(product);
    }
    else{
      alert('Sorry that product is out of stock');
    }
  }

  isInStock(product) {
    return product.quantityInStock > 0
  }
}
