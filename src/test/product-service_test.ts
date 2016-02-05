import { it, describe, expect, injectAsync, beforeEachProviders } from 'angular2/testing';
import { provide } from 'angular2/angular2';
import { ProductService } from '../app/services/product.service';
import { PRODUCTS } from '../app/mocks/mock-products';

describe('Product Service', () => {
  beforeEachProviders(() => [ProductService])

  it('should return a list of products', injectAsync([ProductService], (service) => {
    return service.getProducts().then((products) => {
      expect(products).toEqual(PRODUCTS);
    });
  }));
});
