# inline-toggle-menu
A JavaScript plugin that is similar to a drop-down menu, except instead of revealing additional items below, it will slide inline into the base link. Used to help create a condensed UI for CRUD type operations.

# Current Version
v0.1.0

# Updates

## v0.0.8 to v0.1.0

Fixed issue with styling and toggle menu placement.

## v0.0.7 to v0.0.8

Fixed issue with link styling in max-width: 650px.

## v0.0.6 to v0.0.7

Updated styling to override bootstrap btn for proper placement for device width 650px.

Added new css class ".inline-toggle-menu__nav-group" which is used if you 
want your toggle menu anchor tags to be in a parent container.

## v0.0.5 to v0.0.6

Updated entire html structure, so that it's less dom elements and is more responsive to various resolutions.

Please check the current *Click Menu Example* for more details on how to structure your html.

It now has a responsive width structure, so that the entire inline toggle menu is the full width of the parent element.

Added several new API methods to InlineToggleMenu.
* placeMenuToClosePosition
* placeMenuToOpenPosition
* setupAllToggleMenuPositions
* setupToggleMenuPositions

For more details check the API.

#Installation

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
  <header>
    <h1 class="text-center">Products</h1>
  </header>

  <ul class="nav">
    <li class="inline-toggle-menu">
      <span class="inline-toggle-menu__view">
        <a href="#/view/1" class="btn btn-default inline-toggle-menu__link">
          Car Battery
        </a>
        <span class="inline-toggle-menu__nav">
          <button type="button" 
                  class="btn btn-primary inline-toggle-menu__toggle">
            <i class="toggle-icon fa fa-arrow-circle-left"></i>
          </button>
          <a href="#/edit/1" class="btn btn-info">
            <i class="fa fa-edit"></i>
          </a>
          <a href="#/delete/1" class="btn btn-danger">
            <i class="fa fa-close"></i>
          </a>
        </span>
      </span>
    </li>
    <li class="inline-toggle-menu">
      <span class="inline-toggle-menu__view">
        <a href="#/view/2" class="btn btn-default inline-toggle-menu__link">
          Spark Plug
        </a>
        <span class="inline-toggle-menu__nav">
          <button type="button" 
                  class="btn btn-primary inline-toggle-menu__toggle">
            <i class="toggle-icon fa fa-arrow-circle-left"></i>
          </button>
          <a href="#/edit/2" class="btn btn-info">
            <i class="fa fa-edit"></i>
          </a>
          <a href="#/delete/2" class="btn btn-danger">
            <i class="fa fa-close"></i>
          </a>
        </span>
      </span>
    </li>
  </ul>
</section>
```

# Toggle Menu Nav w/ Parent Container
```html
<span class="inline-toggle-menu__nav">
  <button type="button"
          class="btn btn-primary inline-toggle-menu__toggle">
    <i class="toggle-icon fa fa-arrow-circle-left"></i>
  </button>
  <span class="inline-toggle-menu__nav-group">
    <a href="#/edit/1" class="btn btn-info">
      <i class="fa fa-edit"></i>
    </a>
    <a href="#/delete/1" class="btn btn-danger">
      <i class="fa fa-close"></i>
    </a>
  </span>
</span>
```

This is useful for if you are using Angular and want to ng-repeat the rest 
of the toggle menu nav items.

# Examples

## Installed via Bower
Open **bower_components/inline-toggle-menu/examples/menu.bower.html.** in your web browser.

## Installed via Git
Open **examples/menu.git.html** in your web browser.

# API

Once you download the git repo, you can view Inline Toggle Menu's API by opening api-docs/index.html in your web browser.
