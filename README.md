#click-menu
A JavaScript Click Menu Plugin that will slides the nav menu into the outer base link after the toggle is pressed, and retracts once pressed again.

# Authors
Brandon Sherette <http://brandonsherette.com>

# Installation

## Bower
```bash
bower install https://brandonsherette@bitbucket.org/brandonsherette/plugin-click-menu.git --save
```

## Add CSS to Html Page
```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="bower_components/click-menu/dist/click-menu.min.css">
```

## Add JavaScript to Html Page
```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/click-menu/dist/click-menu.min.js"></script>
```

## Click Menu Example
```
<section class="container">
  <h1 class="text-center">Products</h1>
  <ul class="nav">
    <li class="click-menu">
      <span class="click-menu-view">
        <span class="click-menu-contents">
          <a href="#/view/1" class="btn-default click-menu-link">
            Car Battery
          </a>
        </span>
        <span class="click-menu-nav">
          <span class="nav-item click-menu-toggle">
            <button type="button" class="btn btn-primary">
              <i class="toggle-icon fa fa-arrow-circle-left"></i>
            </button>
          </span>
          <span class="nav-item">
            <a href="#/edit/1" class="btn btn-info">
              <i class="fa fa-edit"></i>
            </a>
          </span>
          <span class="nav-item">
            <a href="#/delete/1" class="btn btn-danger">
              <i class="fa fa-close"></i>
            </a>
          </span>
        </span>
      </span>
    </li>
  </ul>
</section>
```
# Examples
To see a working example just open **bower_components/click-menu/examples/menu.bower.html.** in your web browser.
