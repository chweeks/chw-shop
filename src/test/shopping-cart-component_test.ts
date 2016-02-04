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

  describe('#hasBought', () => {
    it('returns true if item has been bought', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.items = [{'category': 'crocs', id:1}];
      expect(shoppingCart.hasBought('crocs')).toBe(true);
    })
  })

  describe('#tenPoundDiscountIsApplicable', () => {
    it('returns true if discount is applicable', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.total = 49;
      expect(shoppingCart.tenPoundDiscountIsApplicable()).toBe(false);
      shoppingCart.total = 51;
      expect(shoppingCart.tenPoundDiscountIsApplicable()).toBe(true);
    })
  })

  describe('#fifteenPoundDiscountIsApplicable', () => {
    it('returns true if discount is applicable', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.total = 76;
      spyOn(shoppingCart, 'hasBought').and.returnValue(true);
      expect(shoppingCart.fifteenPoundDiscountIsApplicable()).toBe(true);
    })
  })

  describe('#apply5PoundDiscount', () => {
    it('applies 5 pound discount', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.apply5PoundDiscount();
      expect(shoppingCart.fivePoundDiscountApplied).toBe(true);
      expect(shoppingCart.discounts).toBe(5);
    })
  })

  describe('#apply10PoundDiscount', () => {
    it('applies 10 pound discount', inject([ShoppingCartComponent], (shoppingCart) => {
      spyOn(shoppingCart, 'tenPoundDiscountIsApplicable').and.returnValue(true);
      shoppingCart.apply10PoundDiscount();
      expect(shoppingCart.tenPoundDiscountApplied).toBe(true);
      expect(shoppingCart.discounts).toBe(10);
    })
  })

  describe('#apply15PoundDiscount', () => {
    it('applies 15 pound discount', inject([ShoppingCartComponent], (shoppingCart) => {
      spyOn(shoppingCart, 'fifteenPoundDiscountIsApplicable').and.returnValue(true);
      shoppingCart.apply15PoundDiscount();
      expect(shoppingCart.fifteenPoundDiscountApplied).toBe(true);
      expect(shoppingCart.discounts).toBe(15);
    })
  })

  describe('#invalidVoucher', () => {
    it('alert displayed if invalid voucher', inject([ShoppingCartComponent], (shoppingCart) => {
      spyOn(shoppingCart, 'invalidVoucher');
      shoppingCart.apply15PoundDiscount();
      expect(shoppingCart.invalidVoucher).toHaveBeenCalled;
    })
  })

  describe('#discountApplied', () => {
    it('returns true if a voucher has been used', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.discounts = 1;
      expect(shoppingCart.discountApplied()).toBe(true);
    })
  })

  describe('#allDiscountsApplied', () => {
    it('returns true if all vouchers used', inject([ShoppingCartComponent], (shoppingCart) => {
      shoppingCart.fivePoundDiscountApplied = true;
      shoppingCart.tenPoundDiscountApplied = true;
      shoppingCart.fifteenPoundDiscountApplied = true;
      expect(shoppingCart.allDiscountsApplied()).toBe(true);
    })
  })
});
