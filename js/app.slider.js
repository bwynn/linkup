app.slider = (function() {
// ------------------- MODULE SCOPE VARIABLES ----------------------------------
var
  configMap = String() +
          '<div id="slider">' +
            '<h1>Slider module now initialized</h1>' +
            '<a href="#" class="btn">Change content</a>' +
          '</div>',
  stateMap = {
    $append_target: null
  },
  jqueryMap = {},

setJqueryMap, newText, changeText, initModule;
// ------------------- END MODULE SCOPE VARIABLES ------------------------------

// ------------------- DOM METHODS ---------------------------------------------
setJqueryMap = function() {
  var $append_target = stateMap.$append_target,
      $slider = $append_target.find( '#slider' );

  jqueryMap = {
    $slider : $slider,
    $h1: $slider.find('h1'),
    $btn: $slider.find('a.btn')
   };
};

newText = function() {
  jqueryMap.$h1.text("New content for the slider module");
};
// ------------------- END DOM METHODS -----------------------------------------

// ------------------- BEGIN EVENT HANDLERS ------------------------------------
changeText = function() {
  jqueryMap.$btn.on("click", function() {
    return newText();
  });
};
// ------------------- END EVENT HANDLERS --------------------------------------

// ------------------- BEGIN PUBLIC METHODS ------------------------------------
initModule = function( $append_target ) {
  $append_target.append( configMap );
  stateMap.$append_target = $append_target;
  setJqueryMap();
  changeText();
};
// ------------------- END PUBLIC METHODS --------------------------------------
  return { initModule : initModule };
}());
