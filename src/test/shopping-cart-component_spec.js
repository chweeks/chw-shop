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
            shopping_cart_component_1.ShoppingCartComponent.items = ['hello'];
            testing_1.describe('Shopping Cart Component', function () {
                testing_1.beforeEachProviders(function () { return [shopping_cart_component_1.ShoppingCartComponent]; });
                testing_1.it('should return a list of products', function () {
                    testing_1.expect(shopping_cart_component_1.ShoppingCartComponent.items).toEqual(['hello']);
                });
            });
        }
    }
});
//# sourceMappingURL=shopping-cart-component_spec.js.map