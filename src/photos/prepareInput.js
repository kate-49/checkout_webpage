class PrepareInput {
  checkValidInput (input) {
    if (Array.isArray(input) !== true) {
      throw new Error('Wrong input type')
    }
  }

  consolidateInput (input) {
    const sortedInput = input.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null))
    return sortedInput
  }

  run (groceryItemsArrayInput) {
    this.checkValidInput(groceryItemsArrayInput)
    const finalSortedInput = this.consolidateInput(groceryItemsArrayInput)
    return finalSortedInput
  }
}
module.exports = PrepareInput
