![HydroUI Lightweight CSS Library](https://snipes-murphy.github.io/HydroUI/democontent/banner.svg)
A lightweight SCSS/CSS library with a seemless modularity implementation; with complex SCSS processes to make you're coding easy.

## Quick Start (Implementation)
Add this into your head for a quick integration.
```html
<link rel="stylesheet" type="text/css" href="https://snipes-murphy.github.io/HydroUI/hydroui.css">
```

It should look like this:
```html
<head>
  <link rel="stylesheet" type="text/css" href="https://snipes-murphy.github.io/HydroUI/hydroui.css">
</head>
```

### Adding JavaScript functions
HydroUI comes with a variety of things, some of which require the JavaScript file. This file is completely optional, but in order to use things such as the modal this file is required.
Add this to the bottom of your HTML Document: (Optional)
```JS
<script src="https://snipes-murphy.github.io/HydroUI/hydroui.js"></script>
```
**Make sure you have JQuery included as it's a dependency of the JavaScript file**
If you don't already have it integrated add this to the top of your HTML Document:
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

Checkout our demo page [Here](https://snipes-murphy.github.io/HydroUI/demo.html "Demonstration Page")

## Quick Start (Template)
Code snippet:
```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HydroUI site</title>
    <link rel="stylesheet" type="text/css" href="https://snipes-murphy.github.io/HydroUI/hydroui.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://unpkg.com/feather-icons"></script>
  </head>

  <body>

  </body>

  <footer>
    <script src="https://snipes-murphy.github.io/HydroUI/hydroui.js"></script>
  	<script>
  		feather.replace()
  	</script>
  </footer>
</html>
```

## SCSS Integration
When using SCSS, make sure that you use a precompiler. I recommend using [Koala](http://koala-app.com/ "Koala Precompiler App")

### Installation
1. Clone the repository into your project directory, make sure the contents are in the **HydroUI** folder.
2. Link the **hydroui.css** file to your project pages. If you places the repository in your root directory it should look like this.
```html
<link rel="stylesheet" type="text/css" href="HydroUI/hydroui.css">
```
3. Set your precompiler to **ONLY** precompile the **hydroui.scss** file, as compiling the other files is deemed unnecessary.
4. *Optional:* JavaScript file. read the quick start documentation on it for more detail.
```JS
<script src="https://snipes-murphy.github.io/HydroUI/hydroui.js"></script>
```
**Make sure you have JQuery included as it's a dependency of the JavaScript file**
If you don't already have it integrated add this to the top of your HTML Document:
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

### Adding SCSS Files
1. Create a file called **_customscssfilename.scss** in *modules/extensions/..*. Make sure to keep the _ before the file name.
2. Open hydroui.scss in the main folder and add your custom scss file. It should look like this.
```scss
@import "modules/extensions/_customscssfilename";
```
Make sure you don't add the *.scss* on the end.
