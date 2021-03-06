const Database = require('./database.js')

class PriceCalculator {
  constructor () {
    this.database = new Database()
    this.total = 0
  }

  checkIndividualItemPrice (groceryItem) {
    for (const item of this.database.prices) {
      if (item.name === groceryItem) {
        return item.value
      }
    }
  }

  checkForOffers (groceryItem, numberOfItems) {
    for (const item of this.database.prices) {
      if (item.name === groceryItem) {
        if (item.offer !== null) {
          if (item.offer === 'BOGOF') {
            this.redeemBOGOFOffer(item.minimumPurchaseForOffer, groceryItem, numberOfItems)
            // if item offer is a number it should be the discount amount
          } else if (Number.isFinite(item.offer)) {
            this.redeemDiscount(item.offer, item.minimumPurchaseForOffer, numberOfItems)
          }
        }
      }
    }
  }

  redeemBOGOFOffer (minimumPurchaseForOffer, groceryItem, numberOfItems) {
    const price = this.checkIndividualItemPrice(groceryItem)
    // remove additional item from discount if not an even numberOfItems in BOGOF
    if (numberOfItems >= minimumPurchaseForOffer) {
      if (numberOfItems % 2 !== 0) {
        numberOfItems -= 1
      }
    const discount = ((numberOfItems / 2) * price)
    this.total -= discount
    }
  }

  redeemDiscount (discountAmount, minimumPurchaseForOffer, numberOfItems) {
    if (numberOfItems >= minimumPurchaseForOffer) {
      this.total -= (discountAmount * numberOfItems)
    }
  }

  run (groceryItemsHash) {
    for (const productCode in groceryItemsHash) {
      const groceryItemPrice = this.checkIndividualItemPrice(productCode)
      const numberOfItems = groceryItemsHash[productCode]
      this.total += (groceryItemPrice * numberOfItems)
      this.checkForOffers(productCode, numberOfItems)
    }
    this.total = Math.round(this.total * 100) / 100
    return this.total
  }
}
module.exports = PriceCalculator
