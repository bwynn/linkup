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
      newObject = ["One","Two","Three","Four"],
      stateMap = {
        $append_target: null
      },
      jQueryMap = {},

      setJqueryMap, buildNavMap, propagateNav, initModule;
  // ----------------------------- END MODULE SCOPE VARIABLES ------------------

  // ----------------------------- BEGIN DOM METHODS ---------------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function() {
    var $append_target = stateMap.$append_target,
        $navigation = $append_target.find("header.global-header");
        jqueryMap = {
          $navigation: $navigation,
          $globalNavigation: $navigation.find(".global-navigation"),
          $mobileNavigation: $navigation.find(".mobile-navigation"),
          $navListContainer: $navigation.find("nav > ul"),
          $createNavListElement: $("<li><a></a></li>"),
          $listElement: $navigation.find("ul > li > a")
        };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /buildNavMap/
  buildNavMap = function( obj ) {
    var $nav_container = jqueryMap.$navListContainer,
        $list_element = jqueryMap.$createNavListElement,
        i;
        // loop through the length of the nav item length. This is
        // set to a static number now, but this will be generated based on the
        // index number of a json object.
        for ( i = 0; i < obj.length; i++) {
          var $newItem = $list_element.clone();
          $newItem.appendTo( $nav_container );
        }

  };
  // End DOM method /buildNavMap/

  propagateNav = function( ) {
    for ( var i = 0; i < newObject.length; i++ ) {
      console.log( newObject[i] );
    }
  };

  // ----------------------------- END DOM METHODS -----------------------------

  // ----------------------------- BEGIN EVENT HANDLERS ------------------------
  // ----------------------------- END EVENT HANDLERS --------------------------

  // ----------------------------- BEGIN PUBLIC METHODS ------------------------
  initModule = function( $append_target ) {
    $append_target.append( configMap );
    stateMap.$append_target = $append_target;
    setJqueryMap();
    buildNavMap( newObject );
    propagateNav();
  };

  return { initModule: initModule };
  // ----------------------------- END PUBLIC METHODS --------------------------
}());
