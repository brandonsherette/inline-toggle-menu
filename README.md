#click-menu
**Author:** Brandon Sherette

## Bower
```bash
bower install https://brandonsherette@bitbucket.org/brandonsherette/plugin-click-menu.git --save
```

## Add CSS to Html Page
```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="bower_components/click-menu/click-menu.min.css">
```
## Add JavaScript to Html Page
```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/click-menu/click-menu.min.js"></script>
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
## Working Example
To see a working example just open examples/menu.html.
