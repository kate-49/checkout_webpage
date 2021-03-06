class Database {
  constructor () {
    this.prices = [
      { name: 'FR1', value: 3.11, offer: 'BOGOF', minimumPurchaseForOffer: 2 },
      { name: 'SR1', value: 5.00, offer: 0.5, minimumPurchaseForOffer: 3 },
      { name: 'CF1', value: 11.23, offer: null, minimumPurchaseForOffer: null },
      { name: 'KS1', value: 10.00, offer: 1, minimumPurchaseForOffer: 3 },
      { name: 'SK1', value: 6.00, offer: 'BOGOF', minimumPurchaseForOffer: 4 },
    ]
  }
} module.exports = Database
