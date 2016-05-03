/* jshint -W117, -W030 */
describe('Inline Toggle Menu Spec', function() {
  var menu;

  beforeEach(function() {
    FixtureHelper.addFixture().addHtml(getMockPage());
  });

  afterEach(function() {
    FixtureHelper.removeFixture();
  });

  it('should exist', function() {
    expect(InlineToggleMenu).to.be.defined;
  });

  it('should have correct API', function() {
    expect(InlineToggleMenu.$).to.be.defined;
    expect(InlineToggleMenu.init).to.be.a('function');
    expect(InlineToggleMenu.getMenus).to.be.a('function');
    expect(InlineToggleMenu.finishToggleAnimation).to.be.a('function');
    expect(InlineToggleMenu.toggleSelector).to.be.a('string');
    expect(InlineToggleMenu.TOGGLE_STATE).to.be.a('object');
    expect(InlineToggleMenu.unbind).to.be.a('function');
  });

  it('should have fixture setup correctly', function() {
    expect(FixtureHelper.$fixture.html()).to.equal(getMockPage());
  });

  it('should initialize properly with one menu item', function() {
    InlineToggleMenu.init();

    expect(InlineToggleMenu.getMenus().length).to.equal(1);
  });

  it('should open after toggle has been clicked', function() {
    InlineToggleMenu.init();
    menu = getMenu();

    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.CLOSED);

    menu.$toggle.trigger('click');
    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.BUSY);

    menu.finishToggleAnimation();
    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.OPENED);
  });

  it('should close after toggle has been clicked', function() {
    InlineToggleMenu.init();
    menu = getMenu();

    // turn of jquery animations
    $.fx.off = true;

    menu.$toggle.trigger('click');
    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.OPENED);

    // turn jquery animations back on
    $.fx.off = false;
    menu.$toggle.trigger('click');
    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.BUSY);

    InlineToggleMenu.finishToggleAnimation(menu);
    expect(menu.toggleState).to.equal(InlineToggleMenu.TOGGLE_STATE.CLOSED);
  });

  it('should have toggle selector as ".inline-toggle-menu-toggle"', function() {
    expect(InlineToggleMenu.toggleSelector).to.equal('.inline-toggle-menu-toggle');
  });

  it('should clean cached menus', function() {
    InlineToggleMenu.init();

    expect(InlineToggleMenu.getMenus().length).to.equal(1);
    InlineToggleMenu.clearMenus();
    expect(InlineToggleMenu.getMenus().length).to.equal(0);
  });
});
/**
 * Gets the click menu data map.
 * @param {int} [index=0] the index to the menu to get.
 * @return {Object} the found menu.
 */
function getMenu(index) {
  index = index || 0;

  return InlineToggleMenu.getMenus()[index];
}

/**
 * Gets the mock page using the correct format. Used to add to fixture.
 * @return {String}
 */
function getMockPage() {
  var page =
    '<div><ul class="nav">' +
    ' <li role="presentation" class="inline-toggle-menu">' +
    '   <span class="inline-toggle-menu-view">' +
    '     <span class="inline-toggle-menu-contents">' +
    '       <a href="#" class="inline-toggle-menu-link">Menu 1</a>' +
    '     </span>' +
    '     <span class="inline-toggle-menu-nav">' +
    '       <span class="nav-item inline-toggle-menu-toggle">' +
    '         <button class="btn btn-default-primary">' +
    '           <i class="toggle-icon fa fa-arrow-circle-left"></i>' +
    '         </button>' +
    '       </span>' +
    '       <span class="nav-item">' +
    '         <a href="#" class="btn btn-info"><i class="fa fa-edit"></i></a>' +
    '       </span>' +
    '       <span class="nav-item">' +
    '         <a href="#" class="btn btn-danger"><i class="fa fa-close"></i></a>' +
    '       </span>' +
    '     </span>' +
    '   </span>' +
    ' </li>' +
    '</ul></div>';

  return page;
}
