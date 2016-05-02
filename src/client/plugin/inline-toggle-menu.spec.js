/* jshint -W117, -W030 */
describe('Inline Toggle Menu Spec', function() {
  beforeEach(function() {
    FixtureHelper.addFixture().addHtml(getMockPage());

    /*var fixtureHtml = '<div id="unit-fixture" ' +
      'style="position:absolute;top:-10000px;' +
      'left:-10000px;' +
      'width:1000px;' +
      'height:1000px;">' + getMockPage() + '</div>';

    document.body.insertAdjacentHTML('afterbegin', fixtureHtml);
    $fixture = $('#unit-fixture');*/
  });

  it('should exist', function() {
    expect(InlineToggleMenu).to.be.defined;
  });

  it('should have correct API', function() {
    expect(InlineToggleMenu.init).to.be.a('function');
    expect(InlineToggleMenu.getMenus).to.be.a('function');
    expect(InlineToggleMenu.TOGGLE_STATE).to.be.a('object');
    expect(InlineToggleMenu.$).to.be.defined;
  });

  it('should have fixture setup correctly', function() {
    expect(FixtureHelper.$fixture.html()).to.equal(getMockPage());
  });

  it('should initialize properly with one menu item', function() {
    InlineToggleMenu.init();

    expect(InlineToggleMenu.getMenus().length).to.equal(1);
  });

  afterEach(function() {
    FixtureHelper.removeFixture();
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
