var app = (function() {
  var initModule = function( $container ) {
    $container.html('<h1>Hey there, you are hooked up</h1>');
  };

  return { initModule : initModule };
}());
