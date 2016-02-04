System.register(['angular2/testing', '../app/shopping-cart.component'], function(exports_1) {
    var testing_1, shopping_cart_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (shopping_cart_component_1_1) {
                shopping_cart_component_1 = shopping_cart_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Shopping Cart Component', function () {
                testing_1.beforeEachProviders(function () { return [
                    shopping_cart_component_1.ShoppingCartComponent
                ]; });
                testing_1.describe('#cartEmpty', function () {
                    testing_1.it('should return a list of products', testing_1.inject([shopping_cart_component_1.ShoppingCartComponent], function (shoppingCart) {
                        shoppingCart.items = [];
                        testing_1.expect(shoppingCart.cartEmpty()).toBe(true);
                    }));
                });
                testing_1.describe('#resetDiscounts', function () {
                    testing_1.it('should reset all discounts', testing_1.inject([shopping_cart_component_1.ShoppingCartComponent], function (shoppingCart) {
                        shoppingCart.discounts = 100;
                        shoppingCart.resetDiscounts();
                        testing_1.expect(shoppingCart.fivePoundDiscountApplied).toBe(false);
                        testing_1.expect(shoppingCart.tenPoundDiscountApplied).toBe(false);
                        testing_1.expect(shoppingCart.fifteenPoundDiscountApplied).toBe(false);
                        testing_1.expect(shoppingCart.discounts).toEqual(0);
                    }));
                });
                testing_1.describe('#removeFromCart', function () {
                    testing_1.it('removes item from cart', testing_1.inject([shopping_cart_component_1.ShoppingCartComponent], function (shoppingCart) {
                        spyOn(shoppingCart, "resetDiscounts");
                        shoppingCart.items = [{ 'shirt': 5, id: 1 }, { 'trousers': 10, id: 2 }];
                        shoppingCart.removeFromCart({ 'trousers': 10, id: 2 });
                        testing_1.expect(shoppingCart.items).toEqual([{ 'shirt': 5, id: 1 }]);
                        testing_1.expect(shoppingCart.resetDiscounts).toHaveBeenCalled();
                    }));
                });
                testing_1.describe('#applyDiscounts', function () {
                    testing_1.it('removes item from cart', testing_1.inject([shopping_cart_component_1.ShoppingCartComponent], function (shoppingCart) {
                        shoppingCart.total = 10;
                        shoppingCart.discounts = 9;
                        shoppingCart.applyDiscounts();
                        testing_1.expect(shoppingCart.total).toBe(1);
                    }));
                });
                testing_1.describe('#cartTotal', function () {
                    testing_1.it('calculates correct cart total', testing_1.inject([shopping_cart_component_1.ShoppingCartComponent], function (shoppingCart) {
                        var total = 15;
                        total = total.toFixed(2);
                        spyOn(shoppingCart, "applyDiscounts");
                        shoppingCart.items = [{ 'price': 5, id: 1 }, { 'price': 10, id: 2 }];
                        testing_1.expect(shoppingCart.cartTotal()).toBe(total);
                        testing_1.expect(shoppingCart.applyDiscounts).toHaveBeenCalled();
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=shopping-cart-component_test.js.map