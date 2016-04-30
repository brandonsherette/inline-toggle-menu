/* jshint -W117, -W030 */
describe('Click Menu Spec', function() {
  it('should exist', function() {
    expect(ClickMenu).to.be.defined;
  });

  it('should have correct API', function() {
    expect(ClickMenu.init).to.be.a('function');
    expect(ClickMenu.getMenus).to.be.a('function');
    expect(ClickMenu.TOGGLE_STATE).to.be.a('object');
    expect(ClickMenu.$).to.be.defined;
  });
});
/**
 * Gets the click menu data map.
 * @param {int} [index=0] the index to the menu to get.
 * @return {Object} the found menu.
 */
function getMenu(index) {
  index = index || 0;

  return ClickMenu.getMenus()[index];
}

/**
 * Gets the mock page using the correct format. Used to add to fixture.
 * @return {String}
 */
function getMockPage() {
  var page =
    '<div><ul class="nav">' +
    ' <li role="presentation" class="click-menu">' +
    '   <span class="click-menu-view">' +
    '     <span class="click-menu-contents">' +
    '       <a href="#" class="click-menu-link">Menu 1</a>' +
    '     </span>' +
    '     <span class="click-menu-nav">' +
    '       <span class="nav-item click-menu-toggle">' +
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
