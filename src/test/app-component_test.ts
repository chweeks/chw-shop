import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';

import { AppComponent } from '../app/app.component';
import { ProductService } from '../app/product.service';
import { PRODUCTS } from '../app/mock-products';

describe('App Component', () => {
  beforeEachProviders(() => [
    AppComponent,
    ProductService
  ]);

  describe('#ngOnInit', () => {
    it('initialised with empty cart and get products call', inject([AppComponent], (app) => {
      spyOn(app, "getProducts");
      app.ngOnInit();
      expect(app.getProducts).toBeCalled;
      expect(app.productsInCart).toEqual([]);
    }));
  });

  describe('#addToCart', () => {
    it('adds item to cart', inject([AppComponent], (app) => {
      let product = {'name': 'shirt', 'quantityInStock': 1};
      app.ngOnInit();
      app.addToCart(product);
      expect(app.productsInCart).toEqual([product]);
    })
    it('does not add item to cart when out of stock', inject([AppComponent], (app) => {
      let product = {'name': 'shirt', 'quantityInStock': 0};
      spyOn(app, 'outOfStock');
      app.ngOnInit();
      app.addToCart(product);
      expect(app.outOfStock).toBeCalled;
      expect(app.productsInCart).toEqual([]);
    })
  })

  describe('#addToCart', () => {
    it('adds item to cart', inject([AppComponent], (app) => {
      let product = {'name': 'shirt', 'quantityInStock': 1};
      spyOn(app, 'isInStock').and.returnValue(true);
      app.ngOnInit();
      app.addToCart(product);
      expect(app.isInStock(product)).toBeCalled;
      expect(app.productsInCart).toEqual([product]);
    })
  })

  describe('#isInStock', () => {
    it('returns true if product in stock', inject([AppComponent], (app) => {
      let product = {'name': 'shirt', 'quantityInStock': 1};
      expect(app.isInStock(product)).toBe(true);
    })
    it('returns false if product is out of stock', inject([AppComponent], (app) => {
      let product = {'name': 'shirt', 'quantityInStock': 0};
      expect(app.isInStock(product)).toBe(false);
    })
  })

  describe('#outOfStock', () => {
    it('adds item to cart', inject([AppComponent], (app) => {
      spyOn(window, 'alert');
      app.outOfStock();
      expect(window.alert).toHaveBeenCalledWith('Sorry that product is out of stock');
    })
  })
});
