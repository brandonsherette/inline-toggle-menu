/* jshint -W117 */
(function($) {
  /**
   * Stores all click menus.
   * @property menus
   * @private
   * @type Array
   * @default []
   * @since 0.0.1
   */
  var menus = [];
  /**
   * jQuery Selector for the toggle (this is the element that will
   * activate the slide effect).
   * @property toggleSelector
   * @type String
   * @default '.inline-toggle-menu-toggle'
   * @since 0.0.3
   */
  var toggleSelector = '.inline-toggle-menu-toggle';
  /**
   * The different states the menu toggle can be in.
   * @property {Object} TOGGLE_STATE
   * @since 0.0.1
   */
  var TOGGLE_STATE = {
    /**
     * When the toggle is busy, usually in the animation process.
     * @property {String} TOGGLE_STATE.BUSY
     * @type String
     * @default 'busy'
     * @since 0.0.1
     */
    BUSY: 'busy',
    /**
     * When the toggle is closed.
     * @property {String} TOGGLE_STATE.CLOSED
     * @default 'closed'
     * @since 0.0.1
     */
    CLOSED: 'closed',
    /**
     * When the toggle is opened.
     * @property {String} TOGGLE_STATE.OPENED
     * @default 'opened'
     * @since 0.0.1
     */
    OPENED: 'opened'
  };

  /**
   * Click Menu. Used to transition menu into view after click, much like
   * a dropdown, however does it over the link along with some sort of
   * animation effect.
   * @class InlineToggleMenu
   * @author Brandon Sherette
   * @since 0.0.3
   */
  var InlineToggleMenu = {
    $: $,
    init: init,
    clearMenus: clearMenus,
    getMenus: getMenus,
    finishToggleAnimation: finishToggleAnimation,
    toggleSelector: toggleSelector,
    TOGGLE_STATE: TOGGLE_STATE,
    unbind: unbind
  };

  // expose plugin
  window.InlineToggleMenu = InlineToggleMenu;

  // auto initialize plugin
  $(document).ready(InlineToggleMenu.init);

  return InlineToggleMenu;
  //////////////////
  /* API METHODS */
  /////////////////

  /**
   * Initializes the click menu. Searches for all click menus, and
   * sets them up for use. Init is automatically called once after the
   * document is ready.
   * @method init
   * @chainable
   * @since 0.0.1
   */
  function init() {
    var $menus = $('.inline-toggle-menu');

    // make sure to unbind any old lingering events and menu data
    clearMenus();

    // bind menu data
    $menus.each(function() {
      var $root = $(this);
      var $view = $root.find('.inline-toggle-menu-view');
      var $link = $root.find('.inline-toggle-menu-link');
      var $nav = $root.find('.inline-toggle-menu-nav');
      var $toggle = $nav.find(toggleSelector);
      var closePosition = parseFloat($nav.css('right'));
      var openPosition = $nav.width();

      var menu = {
        $root: $root,
        $view: $view,
        $link: $link,
        $nav: $nav,
        $toggle: $toggle,
        $toggleIcon: $toggle.find('.toggle-icon'),
        closePosition: closePosition,
        finishToggleAnimation: function() {
          finishToggleAnimation(this);
        },
        openPosition: openPosition,
        toggleState: TOGGLE_STATE.CLOSED
      };

      menus.push(menu);

      $view.width($root.width() + $nav.width());

      // bind click events
      menu.$toggle.on('click', function(e) {
        _onToggleClick(e, menu);
      });
    });

    return this;
  }

  /**
   * Clears the cached menu data (unbinds any events associated and
   * does any other nessessary clean up operations).
   * @method clearMenus
   * @chainable
   * @since 0.0.3
   */
  function clearMenus() {
    unbind();
    menus = [];

    return this;
  }

  /**
   * Gets all the menus.
   * @method getMenus
   * @return {Array} all click menus.
   * @since 0.0.1
   */
  function getMenus() {
    return menus;
  }

  /**
   * Finishes all menu toggle animations.
   * @method finishToggleAnimation
   * @param {Object} [menu] the menu to finish toggle animation for.
   * @chainable
   * @since 0.0.3
   */
  function finishToggleAnimation(menu) {
    // if menu is provided, only finish the menu's animation
    if (menu && menu.$nav) {
      menu.$nav.finish();

      return this;
    }

    // no menu provided, so finish all toggle animations
    menus.forEach(function(menu) {
      menu.$nav.finish();
    });

    return this;
  }

  /**
   * Unbinds click menu events from all menus.
   * @method unbind
   * @chainable
   * @since 0.0.3
   */
  function unbind() {
    menus.forEach(function(menu) {
      menu.$toggle.off('click');
    });

    return this;
  }

  /////////////////////
  /* PRIVATE METHODS */
  /////////////////////
  /**
   * The event that the a menu toggle has been clicked.
   * @method _onToggleClick
   * @private
   * @param {Event} e the event that was triggered.
   * @param {Object} menu the menu that was triggered the event.
   * @since 0.0.1
   */
  function _onToggleClick(e, menu) {
    // determine what to do based on menu toggle state
    switch (menu.toggleState) {
      case TOGGLE_STATE.CLOSED:
        _openMenu(menu);
        break;

      case TOGGLE_STATE.OPENED:
        _closeMenu(menu);
        break;

      default:
        // no need to do anything, usually will be in the BUSY state
        return;
    }
  }

  /**
   * Opens the specified menu.
   * @method _openMenu
   * @private
   * @param {Object} menu the menu to open.
   * @since 0.0.1
   */
  function _openMenu(menu) {
    var $nav = menu.$nav;
    var animate = {'right': menu.openPosition + 'px'};
    var animateOptions = {duration: 400};

    // update the toggle state
    menu.toggleState = TOGGLE_STATE.BUSY;

    animateOptions.complete = function() {
      _onMenuOpened(menu);
    };

    $nav.animate(animate, animateOptions);
  }

  /**
   * The event that the menu has finally finished opening.
   * @method _onMenuOpened
   * @private
   * @param {Object} menu the menu that opened.
   * @since 0.0.1
   */
  function _onMenuOpened(menu) {
    // update toggle icon
    menu.$toggleIcon
      .removeClass('inline-toggle-menu-toggle-to-open')
      .addClass('inline-toggle-menu-toggle-to-close');
    // update the toggle state
    menu.toggleState = TOGGLE_STATE.OPENED;
  }

  /**
   * Closes the specified menu.
   * @method _closeMenu
   * @private
   * @param {Object} menu the menu to close.
   * @since 0.0.1
   */
  function _closeMenu(menu) {
    var $nav = menu.$nav;
    var animate = {'right': menu.closePosition + 'px'};
    var animateOptions = {};

    // update the toggle state
    menu.toggleState = TOGGLE_STATE.BUSY;

    animateOptions.complete = function() {
      _onMenuClosed(menu);
    };

    $nav.animate(animate, animateOptions);
  }

  /**
   * The event the the menu has finally finished closing.
   * @method _onMethodClose
   * @private
   * @param {Object} menu the menu that closed.
   * @since 0.0.1
   */
  function _onMenuClosed(menu) {
    // update toggle icon
    menu.$toggleIcon
      .removeClass('inline-toggle-menu-toggle-to-close')
      .addClass('inline-toggle-menu-toggle-to-open');
    // update the toggle state
    menu.toggleState = TOGGLE_STATE.CLOSED;
  }
})(jQuery);
