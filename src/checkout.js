const CodeCheckout = require('./codecheckout.js')

class Checkout {

  constructor(name) {
    this.order = []
    this.codecheckout = new CodeCheckout()
  }

  addToCart(item) {
    this.order.push(item);
  }

  allOrders() {
    return this.order
  }

  finalPrice() {
    var total = this.codecheckout(this.order)
    return total;
  }
}
module.exports = Checkout;
