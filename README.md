# d3-widgets

```d3-widgets.js``` provides widgets (buttons, sliders, toggles and radioboxes) to augment your d3-visualization.

> Note: A comprehensive documentation is still missing.... will come soon.

## Installation

Install the package as a node module:

```shell
npm install d3-widgets
```

or clone this repository and install:

```shell
git clone https://github.com/dirkbrockmann/d3-widgets.git
cd d3-widgets
npm install
npm run build
```

View examples:

```shell
npm run examples
```

or start

```shell
http-server ./dist
```

and open `http://localhost:8080/` in the browser.


## Usage

Either load the package as a remote resource like so:

```html
<script src="https://unpkg.com/d3-widgets"></script>
```

```html 
<script>

const a = widgets.button()
const b = widgets.slider()
	
</script>
``` 

Alternatively, use a local copy (`dist/widgets.js`) and include it  in your `html`-file like so:

```html
<script src="widgets.js"></script>
```

```html
<script>
	
	const b = widgets.button().size(100).shape("rect")
	
</script>
```

If you want to use it as part of your own project as a module import `d3-widgets` like so:

```js
import * as widgets from "d3-widgets"
```

# Widgets

> Note: A comprehensive documentation is still missing.... will come soon.

`widgets` provides different types of widget objects:

- `button`
- `slider`
- `toggle`
- `radio`
- `grid`
- `widget`

The first four define the actual objects for the different types of widget. `widget` generates the corresponding `html` that gets integrated in the target `svg` container.

Say you have the following html
```html
<div id="widgetstuff"></div>
```
the following code will append an  `svg` child to the above `div` element that contains a button:
```html
<script>
const svg = d3.select("#widgetstuff").append("svg")
    .attr("width",300).attr("height",300)
const button = widgets.button()
svg.selectAll(".button").data([button]).enter().append(widgets.widget)
    attr("transform","translate(150,150)")
</script>
```

`widgets.widget` generates the `html` stuff that is appended to the `svg` and bound to the data contained in the `button` object.

## Button

A simple button is created like this:
```javascript
button = widgets.button()
``` 
by default with a _Play_ action symbol. Eight different action symbols are available:
1. _Play_
2. _Pause_
3. _Stp_ 
4. _Rewind_
5. _Reload_
6. _Back_
7. _Capture_
8. _Forward_.

```javascript
button = widgets.button().actions(["forward"])
``` 
creates a button with a _Forward_ action symbol.

You can define a sequence of actions for a buttons. At each click, the next action in the sequence is taken (cyclicly):

```javascript
button = widgets.button().actions(["play","pause"])
``` 
generates a button that alternates between _Play_ and _Pause_ action symbol.

`widgets.button` has the following methods, all of which can be chained and when called without argument return the corresponding value. 
- `id(STRING)`: sets the buttons **id**. So e.g. `button.id("murse")` sets the **id** of `button` to `"murse"`. If not set, the **id** is set to a random string.
- `actions(ARRAY)`: sets the **array of actions** that a button cycles through when clicked. So e.g. `button.actions(["play","pause","rewind","capture"])` sets the sequence to the four actions in the argument.
- `update(FUNCTION)`: can be used to attach a function to a button that is called everytime the button is clicked, e.g. `button.update(function(){ console.log("hello") })` prints out hello everytime the button is clicked.
- `size(FLOAT)`: sets the size of the button. E.g. `button.size(100)` sets the size to 100. Default is `50`.
- `symbolsize(FLOAT)`: sets the size of the symbol inside the button. The argument should be between 0 and 1. E.g. `button.symbolsize(0.25)` sets the symbol to 25% of the button's size.
- `shape("round"|"rect")`: sets the shape of the button to either rectangular or round. Default is `round`.
- `position({x:FLOAT,y:FLOAT})`: sets the position of the button in the parent `svg` container. E.g. `button.position({x:50,y:150})` sets the position to (50,150) in the `svg` coordinate system.
- `label(STRING)`: labels the button, e.g. `button.label("godle")` labels the button `godle`. Default is `null`.
- `labelposition("top"|"bottom"|"left"|"right")`: determines where a label is placed. Default is `"bottom"`.
- `button.fontsize(FLOAT)` sets the fontsize of the label. Default is 12.

Additionally, a button has these methods:

- `value()`: returns the current state of the button between `0` and  `button.actions().length-1`. The value gets incremented everytime the button is pressed.
- `click()`: you can also click the button in the code by calling `button.click()`.

You can set many of the properties all at once by chaining, for example like this:

```javascript
button = widgets.button()
    .actions(["play","rewind","capture"])
    .size(100)
    .symbolsize(0.1)
    .label("click me")
    .labelposition("left")
    .shape("rect")
    .position({x:10,y:20})
    .fontsize(20)
```

## Slider

Here's a simple slider

```javascript
slider = widgets.button()
```

- `slider.id(STRING)` provides `slider` with a **id**. E.g. `slider.id("vonst")` assigns the slider the id `"vonst"`.  By default (when a slider is made) the id is a random string. Without argument `ìd()` returns the sliders's id.
- `slider.range([X0,X1])` sets the numerical range if the slider. By default the range is `[0,1]`. Without arguments, returns the current range.
- `slider.value()` returns the value corresponding to the current slider setting.
- `slider.update(FUNCTION)` assigns a function that is called every time the slider is moved. E.g.
    ```javascript
    s = widgets.slider().update(()=>{console.log(s.value())})
    ```
    prints out the value of the slider.
- `slider.set(VALUE)` sets the slider to `VALUE` which must be in the valid range.
- `slider.size(SIZE)` sets the length of the slider to `SIZE`. Default is `100`. Without argument returns the length of the slider.
- `slider.girth(SIZE)` sets the width of the slider to `SIZE`. Default is `8`. Without arg
			label: function(arg) { if ("undefined" === typeof arg) { return label } else { label = arg; return this }},			
			css: function(arg) { if ("undefined" === typeof arg) { return css } else { css = arg; return this }},			
			size: function(arg) { if ("undefined" === typeof arg) { return size } else { size = arg; return this }},
			girth: function(arg) { if ("undefined" === typeof arg) { return girth } else { girth = arg; return this }},
			knob: function(arg) { if ("undefined" === typeof arg) { return knob } else { knob = arg; return this }},
			show: function(arg) { if ("undefined" === typeof arg) { return show } else { show = arg; return this }},
			position: function(arg) { if ("undefined" === typeof arg) { return position } else { position = arg; return this }},
			x: function(arg) { if ("undefined" === typeof arg) { return position.x } else { position.x = arg; return this }},
			y: function(arg) { if ("undefined" === typeof arg) { return position.y } else { position.y = arg; return this }},
			labelposition: function(arg) { if ("undefined" === typeof arg) { return labelposition } else { labelposition = arg; return this }},
			fontsize: function(arg) { if ("undefined" === typeof arg) { return fontsize } else { fontsize = arg; return this }},
			update: function(arg) { if ("function" === typeof arg) {update = arg; return this} else { update(arg) }},
			range: function(arg) { if ("undefined" === typeof arg) { return range } else { range = arg; return this }},
			value: function(arg) { if ("undefined" === typeof arg) { return value } else { value = arg; return this }},
			set:set

Let's assume we have created a `button` like above then: 

## Toggle

## Radio