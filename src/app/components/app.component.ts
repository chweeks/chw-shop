import {Component} from 'angular2/core';
import {Product} from '../product';
import {ShoppingCartComponent} from './shopping-cart.component'
import {ProductService} from '../services/product.service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'my-app',
  providers: [ProductService],
  directives: [ShoppingCartComponent],
  templateUrl: 'app/templates/app.html',
  styleUrls: ['app/styles/products-list.css']
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

  addToCart(product) {
    if(this.isInStock(product)){
      this.productsInCart.push(product);
    }
    else{
      this.outOfStock();
    }
  }

  isInStock(product) {
    return product.quantityInStock > 0
  }

  outOfStock() {
    alert('Sorry that product is out of stock');
  }
}
