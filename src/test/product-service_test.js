System.register(['angular2/testing', '../app/product.service', '../app/mock-products'], function(exports_1) {
    var testing_1, product_service_1, mock_products_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (mock_products_1_1) {
                mock_products_1 = mock_products_1_1;
            }],
        execute: function() {
            testing_1.describe('Product Service', function () {
                testing_1.beforeEachProviders(function () { return [product_service_1.ProductService]; });
                testing_1.it('should return a list of products', testing_1.injectAsync([product_service_1.ProductService], function (service) {
                    return service.getProducts().then(function (products) {
                        testing_1.expect(products).toEqual(mock_products_1.PRODUCTS);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=product-service_test.js.map