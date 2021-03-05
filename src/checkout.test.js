const Checkout = require('./checkout.js');

describe('Checkout', function() {
  var checkout 

  beforeEach(function() {
    checkout = new Checkout();
  });

  it('can list return with prices', function() {
    checkout.getPrice('spaghetti');
    expect(checkout.finalPrice()).toEqual(2);
  });

  it('can tell you the price of an item', function() {
    checkout.getPrice('CF1');
    expect(checkout.finalPrice()).toEqual(11.23);

    checkout.getPrice('FR1');
    expect(checkout.finalPrice()).toEqual(3.11);

    checkout.getPrice('SR1');
    expect(checkout.finalPrice()).toEqual(5.00);
  });
})