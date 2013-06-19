// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  $('[data-explore]').click(function() {
    var link = $(this);
    link.button('loading');
    $('#display-json').load(link.attr('href'), function() {
      link.button('reset');
    });
    return false;
  });
});



var HomePageManagement = window.HomePageManagement = {
  autoLogin: function() {
    $(document).ready(function() {
      var login_url = $('#js-home-sign_in').attr('href');
      window.location.replace(login_url);
    }); 
  }
}
