describe('Click Menu Spec', function() {
  var $page = getMockPage();
  
  beforeEach(function() {
    
  });
  
  it('should exist', function() {
    expect(ClickMenu).to.be.defined;
  });
  
  it('should have correct API', function() {
    expect(ClickMenu.init).to.be.a('function');
    expect(ClickMenu.$).to.be.defined;
  });
});

QUnit.module('Click Menu', function() {
  QUnit.test('Should Bind Properly', function(assert) {
    var menus;
    
    $('#qunit-fixture').html(getMockPage());
    
    ClickMenu.init();
    menus = ClickMenu.getMenus();
    
    assert.equal(menus.length, 1, 'Menu is proper length');
  });
});
 ////////////////

function getMockPage() {
  var page =
    '<ul>' +
    '<li><a href="#" class="click-menu">Menu 1</a>' +
    '<ul class="click-menu-group">' +
    '<li><a href="#">View</a></li>' +
    '<li><a href="#">Edit</a></li>' +
    '<li><a href="#">Delete</a></li>' +
    '</ul></li>' +
    '</ul>';
    
  return page;
}
  