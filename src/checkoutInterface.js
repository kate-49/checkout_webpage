const Checkout = require('./checkoutInterface.js');

class CheckoutInterface {

  constructor(name) {
    this.order = []
    this.checkout = new Checkout;
  }

  addToCart(item) {
    this.order.push(item);
  }

  allOrders() {
    return this.order
  }

  finalPrice() {
    var finalPrice = this.checkout.run(this.order);
    return finalPrice
  }
}
module.exports = CheckoutInterface;
