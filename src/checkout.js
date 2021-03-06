class Checkout {

  constructor(name) {
    this.priceList = {'CF1': 11.23, 'SR1': 5.00, 'FR1': 3.11};
    this.order = []
    this.totalprice = []
  }

  getPrice(item) {
    var price = this.priceList[item];
    this.totalprice += price
  }

  addToCart(item) {
    this.order.push(item);
  }

  allOrders() {
    return this.order
  }

  checkForOffers() {
    var totalSR1 = this.order.count('SR1')
    if (totalSR1 >= 3) {
      this.totalPrice -= (totalSR1 * 0.5)
    }
  }

  finalPrice() {
    this.checkForOffers()
    return this.totalPrice;
  }
}
module.exports = Checkout;
