var checkoutInterface = new CheckoutInterface();

$(document).ready(function() {

  reloadAllOrders();

  $('#add-coffee').click(function() {
    checkoutInterface.addToCart('CF1');
    reloadAllOrders();
  })

  $('#add-strawberries').click(function() {
    checkoutInterface.addToCart('SR1');
    reloadAllOrders();
  })

  $('#add-tea').click(function() {
    checkoutInterface.addToCart('FR1');
    reloadAllOrders();
  })

  $('#checkout').click(function() {
    checkoutInterface.finalPrice();
    reloadAllOrders();
  })

  function reloadAllOrders() {
    $('#placefill').text(checkoutInterface.allOrders());
  }

  function totalPrice() {
    $('#placefill2').text("£" + checkoutInterface.finalPrice());
  }
})