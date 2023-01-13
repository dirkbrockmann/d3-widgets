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

Eight different action symbols of buttons exist: _Play_, _Pause_, _Stp_, _Rewind_, _Reload_, _Back_, _Capture_, and _Forward_.

```javascript
button = widgets.button()
``` 
generates a button and stores is in `button`. Typically you assign a sequence of actions when a button is made like so:

```javascript
button = widgets.button().actions(["play","pause"])
```
which makes a button that cycles through the actions _Play_ and _Pause_.

Let's assume we have created a `button` like above then: 

- `button.id(STRING)` provides `button` with a **id**. E.g. `button.id("nurkel")` assigns the button the id `"nurkel"`.  By default (when a button is made) the id is a random string. Without argument `ìd()` returns the button's id.
- `button.actions(ARRAY)` sets the array of actions that a button cycles through when clicked. The array's elements must be at least, possiblly more than, one of the following allowed actions:
    - `"play"`
    - `"pause"`
    - `"back"`
    - `"stp"`
    - `"capture"`
    - `"forward"`
    - `"rewind"`
    - `"reload"`
So e.g. `button.actions(["back","forward","rewind"])` assigns the three actions to the button, when the button is clicked, the action is performed, the button proceeds to the next state cyclically. Without arguments `button.actions()` returns the array of actions.
- `button.value()` reports the current state of the button, a value between `0` and `button.actions().length`.
- `button.update(FUNCTION)` passes a function to the button that get's executed everytime the button is clicked. `button.update(function(){ console.log("hello") })`. Without argument, returns the button's update function.
- you can also click the button in the code by calling `button.click()`.
- `button.size(SIZE)` sets the size of the button, default is `50`. Without argument returns the size, so `button.size(100)` makes a larger button. Without argument returns the button's size.
- `button.symbolsize(SIZE)` set the size of the symbol inside the button. SIZE should be a number between 0 and 1 as it quantifies the relative size of the symbol with respect to the overall size of the button. Default is `0.3`. Without argument returns the symbolsize.
- `button.shape("round"|"rect")`sets the shape of the button. Without argument returns the shape. Default is `round`.
- `button.position({x:XPOS,y:YPOS})` sets the position of the button in the parent `svg` container to the point (XPOS,YPOS). Without arguments returns the position. Default is (0,0).
- `button.label(STRING)` labels the button with a string `STRING`. Default is `null`. Without argument returns the label.
- `button.labelposition("top"|"bottom"|"left"|"right")` determines where a potential label is placed. Default is `"bottom"`. Without arguments returns the labelposition.
- `button.fontsize(SIZE)` sets the fontsize of the label. The default is 12, set by an internal css. This method overrides the css. 

You can set many of the properties all at once like so for example:

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

To 

```javascript
slider = widgets.button()
```


Let's assume we have created a `button` like above then: 

## Toggle

## Radio