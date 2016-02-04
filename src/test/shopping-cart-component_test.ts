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

import { ShoppingCartComponent } from '../app/shopping-cart.component';

describe('Shopping Cart Component', () => {
  beforeEachProviders(() => [
    ShoppingCartComponent
  ]);

  describe('#cartEmpty', () => {
    it('should return a list of products', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.items = [];
      expect(shoppingCart.cartEmpty()).toBe(true);
    }));
  });

  describe('#resetDiscounts', () => {
    it('should reset all discounts', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.discounts = 100;
      shoppingCart.resetDiscounts();
      expect(shoppingCart.fivePoundDiscountApplied).toBe(false);
      expect(shoppingCart.tenPoundDiscountApplied).toBe(false);
      expect(shoppingCart.fifteenPoundDiscountApplied).toBe(false);
      expect(shoppingCart.discounts).toEqual(0);
    }));
  });

  describe('#removeFromCart', () => {
    it('removes item from cart', inject([ShoppingCartComponent], (shoppingCart) => {
      spyOn(shoppingCart, "resetDiscounts");
      shoppingCart.items = [{'shirt': 5, id: 1}, {'trousers':10, id: 2}];
      shoppingCart.removeFromCart({'trousers':10, id: 2});
      expect(shoppingCart.items).toEqual([{'shirt': 5, id: 1}]);
      expect(shoppingCart.resetDiscounts).toHaveBeenCalled();
    }));
  });

  describe('#applyDiscounts', () => {
    it('removes item from cart', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.total = 10;
      shoppingCart.discounts = 9;
      shoppingCart.applyDiscounts();
      expect(shoppingCart.total).toBe(1);
    }));
  });

  describe('#cartTotal', () => {
    it('calculates correct cart total', inject([ShoppingCartComponent], (shoppingCart) => {
      let total = 15;
      total = total.toFixed(2);
      spyOn(shoppingCart, "applyDiscounts");
      shoppingCart.items = [{'price': 5, id: 1}, {'price':10, id: 2}];
      expect(shoppingCart.cartTotal()).toBe(total);
      expect(shoppingCart.applyDiscounts).toHaveBeenCalled();
    }));
  });
});
