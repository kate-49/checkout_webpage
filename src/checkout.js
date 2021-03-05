class Checkout {

  constructor(name) {
    this.priceList = {'CF1': 11.23, 'SR1': 5.00, 'FR1': 3.11};
    this.order = []
    this.totalprice = []
  }

  getPrice(item) {
    var price = this.priceList[item];
    this.totalprice.push(price)
  }

  addToCart(item) {
    this.order.push(item);
  }

  allOrders() {
    return this.order
  }

  finalPrice() {
    var sum = this.totalprice.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum;
  }

}