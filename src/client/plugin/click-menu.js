var ClickMenu = (function($) {
  var menus = [];
  
  var ClickMenu = {
    init: init,
    getMenus: getMenus,
    $: $
  }
  
  $(document).ready(ClickMenu.init);
  
  return ClickMenu;
  //////////////////////
  
  function init() {
    var $menus = $('.click-menu');
    console.log('e');
    // bind menu data
    $menus.each(function() {
      var $root = $(this);
      var $view = $root.find('.click-menu-view');
      var $link = $root.find('.click-menu-link');
      var $nav = $root.find('.click-menu-nav');
      
      var menu = {
        $root: $root,
        $view: $view,
        $link: $link,
        $nav: $nav
      };
      
      menus.push(menu);
      
      $view.width($root.width() + $nav.width());
      
      
      // bind click events
      $root.hover(function(e) {
        _onHoverIn(e, menu);
      }, function(e) {
        _onHoverOut(e, menu);
      });
    });
  }
  
  function getMenus() {
    return menus;
  }
  
  function _onHoverIn(e, menu) {
    var $nav = menu.$nav;
    var width = $nav.width();
    console.log('width: ' + width);
    
    // show click menu at click position
    $nav.animate({
      'right': width + 'px'
    });
  }
  
  function _onHoverOut(e, menu) {
    var $nav = menu.$nav;
    var width = $nav.width();
    console.log('width: ' + width);
    
    // show click menu at click position
    $nav.animate({
      'right': '-' + width + 'px'
    });
  }
})(jQuery);
