#inline-toggle-menu
A JavaScript plugin that is similar to a drop-down menu, except instead of revealing additional items below, it will slide inline into the base link. Used to help create a condensed UI for CRUD type operations.

# Installation

## Bower
```bash
bower install inline-toggle-menu --save
```

## Add CSS to Html Page
```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="bower_components/inline-toggle-menu/dist/inline-toggle-menu.min.css">
```

## Add JavaScript to Html Page
```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/inline-toggle-menu/dist/inline-toggle-menu.min.js"></script>
```

## Click Menu Example
```
<section class="container">
  <h1 class="text-center">Products</h1>
  <ul class="nav">
    <li class="inline-toggle-menu">
      <span class="inline-toggle-menu-view">
        <span class="inline-toggle-menu-contents">
          <a href="#/view/1" class="btn-default inline-toggle-menu-link">
            Car Battery
          </a>
        </span>
        <span class="inline-toggle-menu-nav">
          <span class="nav-item inline-toggle-menu-toggle">
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

## Installed via Bower
Open **bower_components/inline-toggle-menu/examples/menu.bower.html.** in your web browser.

## Installed via Git
Open **examples/menu.git.html** in your web browser.

# Api

One you download the git repo, you can view Inline Toggle Menu's API by opening api-docs/index.html in your web browser.
