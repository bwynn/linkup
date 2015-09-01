app.navigation = (function() {
  // ----------------------------- MODULE SCOPE VARIABLES ----------------------
  var configMap = String() +
            '<header class="global-header">' +
              '<nav class="global-navigation">' +
                '<ul></ul>' +
              '</nav>' +
              '<nav class="mobile-navigation">' +
                '<ul></ul>' +
              '</nav>' +
            '</header>',
      stateMap = {
        $append_target: null,
        nav_length: 6
      },
      jQueryMap = {},

      setJqueryMap, buildNavMap, navigationGroup, initModule;
  // ----------------------------- END MODULE SCOPE VARIABLES ------------------

  // ----------------------------- BEGIN DOM METHODS ---------------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function() {
    var $append_target = stateMap.$append_target,
        $navigation = $append_target.find(".global-header");
        jqueryMap = {
          $navigation: $navigation,
          $globalNavigation: $navigation.find(".global-navigation"),
          $mobileNavigation: $navigation.find(".mobile-navigation"),
          $navListContainer: $navigation.find("nav > ul"),
          $navListElement: $("<li><a></a></li>")
        };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /buildNavMap/
  buildNavMap = function(  ) {
    var $nav_container = jqueryMap.$navListContainer,
        $list_element = jqueryMap.$navListElement,
        i;

        // loop through the length of the nav item length. This is
        // set to a static number now, but this will be generated based on the
        // index number of a json object. 
        for ( i = 0; i < stateMap.nav_length; i++) {

          var $newItem = $list_element.clone();

          $newItem.appendTo( $nav_container );
        }

  };
  // End DOM method /buildNavMap/

  navigationGroup = function() {
    console.log("navigation group function called.")
  };

  // ----------------------------- END DOM METHODS -----------------------------

  // ----------------------------- BEGIN EVENT HANDLERS ------------------------
  // ----------------------------- END EVENT HANDLERS --------------------------

  // ----------------------------- BEGIN PUBLIC METHODS ------------------------
  initModule = function( $append_target ) {
    $append_target.append( configMap );
    stateMap.$append_target = $append_target;
    setJqueryMap();
    buildNavMap();
  };

  return { initModule: initModule };
  // ----------------------------- END PUBLIC METHODS --------------------------
}());
