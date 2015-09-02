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
      nav_item_count = 4,
      stateMap = {
        $append_target: null
      },
      jQueryMap = {},

      setJqueryMap, getLinks, buildNavMap, buildNav, initModule;
  // ----------------------------- END MODULE SCOPE VARIABLES ------------------

  // ----------------------------- BEGIN DOM METHODS ---------------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function() {
    var $append_target = stateMap.$append_target,
        $navigation = $append_target.find("header.global-header");
        jqueryMap = {
          $navigation: $navigation,
          $globalNavigation: $navigation.find(".global-navigation > ul"),
          $mobileNavigation: $navigation.find(".mobile-navigation > ul"),
          $createNavListElement: $("<li><a></a></li>")
        };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /buildNavMap/
  buildNavMap = function( target, obj ) {
    var $nav_container = jqueryMap.$navListContainer,
        $list_element = jqueryMap.$createNavListElement,
        i;
        // loop through the length of the nav item length. 
        for ( i = 0; i < nav_item_count; i++) {
          var $newItem = $list_element.clone();
          $newItem.appendTo( target );
        }

  };
  // End DOM method /buildNavMap/

  buildNav = function( elem ) {
    buildNavMap( elem );
    getLinks( elem );
  };

  getLinks = function( elem ) {
      $.getJSON('../data/data.json', function(data) {
        var items = elem.find("a");

        items.each(function(i) {
          return $(this).text( data[i].link_name );
        });
      });
  };

  // ----------------------------- END DOM METHODS -----------------------------

  // ----------------------------- BEGIN EVENT HANDLERS ------------------------
  // ----------------------------- END EVENT HANDLERS --------------------------

  // ----------------------------- BEGIN PUBLIC METHODS ------------------------
  initModule = function( $append_target ) {
    $append_target.append( configMap );
    stateMap.$append_target = $append_target;
    setJqueryMap();
    buildNav( jqueryMap.$globalNavigation );
    buildNav( jqueryMap.$mobileNavigation );
  };

  return { initModule: initModule };
  // ----------------------------- END PUBLIC METHODS --------------------------
}());
