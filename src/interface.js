$(document).ready(function() {

  var checkout = new Checkout();

  reloadAllOrders();

  $('#add-coffee').click(function() {
    checkout.addToCart('CF1');
    checkout.getPrice('CF1');
    reloadAllOrders();
    reloadTotalPrice();
  })

  $('#add-strawberries').click(function() {
    checkout.addToCart('SR1');
    checkout.getPrice('SR1');
    reloadAllOrders();
    reloadTotalPrice();
  })

  $('#add-tea').click(function() {
    checkout.addToCart('FR1');
    checkout.getPrice('FR1');
    reloadAllOrders();
    reloadTotalPrice();
  })

  function reloadAllOrders() {
    $('#placefill').text(checkout.allOrders());
  }

  function reloadTotalPrice() {
    $('#placefill2').text("£" + checkout.finalPrice());
  }
})