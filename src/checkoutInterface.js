const Checkout = require('./checkoutInterface.js');

class CheckoutInterface  {

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
    return this.checkout.run(this.order);
  }
}
module.exports = CheckoutInterface;
