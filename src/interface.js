const CheckoutInterface = require('./checkoutInterface.js');

$(document).ready(function() {

  reloadAllOrders();

  $('#add-coffee').click(function() {
    CheckoutInterface.addToCart('CF1');
    reloadAllOrders();
  })

  $('#add-strawberries').click(function() {
    CheckoutInterface.addToCart('SR1');
    reloadAllOrders();
  })

  $('#add-tea').click(function() {
    CheckoutInterface.addToCart('FR1');
    reloadAllOrders();
  })

  $('#checkout').click(function() {
    CheckoutInterface.finalPrice();
    reloadAllOrders();
  })

  function reloadAllOrders() {
    $('#placefill').text(CheckoutInterface.allOrders());
  }

  function totalPrice() {
    $('#placefill2').text("£" + CheckoutInterface.finalPrice());
  }
})