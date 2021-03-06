$(document).ready(function() {

  var checkout = new Checkout();

  reloadAllOrders();

  $('#add-coffee').click(function() {
    checkout.addToCart('CF1');
    checkout.getPrice('CF1');
    reloadAllOrders();
  })

  $('#add-strawberries').click(function() {
    checkout.addToCart('SR1');
    reloadAllOrders();
  })

  $('#add-tea').click(function() {
    checkout.addToCart('FR1');
    reloadAllOrders();
  })

  function reloadAllOrders() {
    $('#placefill').text(checkout.allOrders());
  }

  function reloadTotalPrice() {
    $('#placefill2').text("£" + checkout.finalPrice());
  }
})