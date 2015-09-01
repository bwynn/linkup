app.shell = (function() {
// ------------------- MODULE SCOPE VARIABLES ----------------------------------
var
  configMap = String() +
            '<div id="content"></div>',
  stateMap = { $container : null },
  jqueryMap = {},

setJqueryMap, initModule;
// ------------------- END MODULE SCOPE VARIABLES ------------------------------

// ------------------- DOM METHODS ---------------------------------------------
setJqueryMap = function() {
  var $container = stateMap.$container;
  jqueryMap = { $container : $container };
};
// ------------------- END DOM METHODS -----------------------------------------

// ------------------- BEGIN EVENT HANDLERS ------------------------------------
// ------------------- END EVENT HANDLERS --------------------------------------

// ------------------- BEGIN PUBLIC METHODS ------------------------------------
initModule = function( $container ) {
  stateMap.$container = $container;
  $container.html(configMap);
  setJqueryMap();

  app.navigation.initModule( jqueryMap.$container );
  app.modal.initModule( jqueryMap.$container );
  app.slider.initModule( jqueryMap.$container );
};
// ------------------- END PUBLIC METHODS --------------------------------------
  return { initModule : initModule };
}());
