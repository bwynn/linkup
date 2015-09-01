app.modal = (function() {
// ------------------- MODULE SCOPE VARIABLES ----------------------------------
var
  configMap = String() +
          '<div id="modal">' +
            '<h1></h1>' +
          '</div>',
  stateMap = {
    $append_target: null
  },
  jqueryMap = {},

setJqueryMap, initModule;
// ------------------- END MODULE SCOPE VARIABLES ------------------------------

// ------------------- DOM METHODS ---------------------------------------------
setJqueryMap = function() {
  var $append_target = stateMap.$append_target,
  $modal = $append_target.find( '#modal' );
  jqueryMap = {
    $modal : $modal,
    $h1: $modal.find('h1')
   };
};
// ------------------- END DOM METHODS -----------------------------------------

// ------------------- BEGIN EVENT HANDLERS ------------------------------------
// ------------------- END EVENT HANDLERS --------------------------------------

// ------------------- BEGIN PUBLIC METHODS ------------------------------------
initModule = function( $append_target ) {
  $append_target.append( configMap );
  stateMap.$append_target = $append_target;
  setJqueryMap();
};
// ------------------- END PUBLIC METHODS --------------------------------------
  return { initModule : initModule };
}());
