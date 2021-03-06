const PriceCalculator = require('./priceCalculator.js')
const PrepareInput = require('./prepareInput.js')

class BackEndCheckout {
  constructor () {
    this.priceCalculator = new PriceCalculator()
    this.prepareInput = new PrepareInput()
  }

  getTotalCost (itemsHash) {
    const totalPriceFromPriceCalculator = this.priceCalculator.run(itemsHash)
    return totalPriceFromPriceCalculator
  }

  run (itemsInput) {
    const itemsHash = this.prepareInput.run(itemsInput)
    const totalPrice = this.getTotalCost(itemsHash)
    return totalPrice
  }
}
module.exports = BackEndCheckout
