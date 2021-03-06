const CheckoutInterface = require('./checkoutInterface.js');

$(document).ready(function() {
  var interfacecheckoutInterface = new CheckoutInterface();

  reloadAllOrders();

  $('#add-coffee').click(function() {
    interfacecheckoutInterface.addToCart('CF1');
    reloadAllOrders();
  })

  $('#add-strawberries').click(function() {
    interfacecheckoutInterface.addToCart('SR1');
    reloadAllOrders();
  })

  $('#add-tea').click(function() {
    interfacecheckoutInterface.addToCart('FR1');
    reloadAllOrders();
  })

  $('#checkout').click(function() {
    interfacecheckoutInterface.finalPrice();
    reloadAllOrders();
  })

  function reloadAllOrders() {
    $('#placefill').text(interfacecheckoutInterface.allOrders());
  }

  function totalPrice() {
    $('#placefill2').text("£" + interfacecheckoutInterface.finalPrice());
  }
})