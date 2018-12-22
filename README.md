# HydroUI
A lightweight SCSS library with modularity to you only load what you use.

## Quick Start
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

Checkout our demo page [Here](https://snipes-murphy.github.io/HydroUI/demo.html "Demonstration Page")

## SCSS Integration
When using SCSS, make sure that you use a precompiler. I recommend using [Koala](http://koala-app.com/ "Koala Precompiler App")

### Installation
1. Clone the repository into your project directory, make sure the contents are in the **HydroUI** folder.
2. Link the **hydroui.css** file to your project pages. If you places the repository in your root directory it should look like this.
```html
<link rel="stylesheet" type="text/css" href="HydroUI/hydroui.css">
```
3. Set your precompiler to **ONLY** precompile the **hydroui.scss** file, as compiling the other files is deemed unnecessary.

### Adding SCSS
1. Create a file called **_customscssfilename.scss** in *modules/extensions/..*. Make sure to keep the _ before the file name.
2. Open hydroui.scss in the main folder and add your custom scss file. It should look like this.
```scss
@import "modules/_customscssfilename";
```
Make sure you don't add the *.scss* on the end.
