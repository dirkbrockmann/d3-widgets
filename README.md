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


- `id(STRING)`: sets the button's **id**. So e.g. `button.id("murse")` sets the **id** of `button` to `"murse"`. If not set, the **id** is set to a random string.
- `actions(ARRAY)`: sets the **array of actions** that a button cycles through when clicked. So e.g. `button.actions(["play","pause","rewind","capture"])` sets the sequence to the four actions in the argument.
- `update(FUNCTION)`: can be used to attach a function to a button that is called everytime the button is clicked, e.g. `button.update(function(){ console.log("hello") })` prints out hello everytime the button is clicked.
- `size(FLOAT)`: sets the size of the button. E.g. `button.size(100)` sets the size to 100. Default is `50`.
- `symbolsize(FLOAT)`: sets the size of the symbol inside the button. The argument should be between 0 and 1. E.g. `button.symbolsize(0.25)` sets the symbol to 25% of the button's size.
- `shape("round"|"rect")`: sets the shape of the button to either rectangular or round. Default is `round`.
- `position({x:FLOAT,y:FLOAT})`: sets the position of the button in the parent `svg` container. E.g. `button.position({x:50,y:150})` sets the position to (50,150) in the `svg` coordinate system.
- `x(FLOAT)`: sets the x-coordinate of the button in the parent `svg` container. E.g. `button.x(50)` sets the x-coordinate to 50 in the `svg` coordinate system.
- `y(FLOAT)`: sets the y-coordinate of the button in the parent `svg` container. E.g. `button.y(300)` sets the y-coordinate to 300 in the `svg` coordinate system.
- `label(STRING)`: labels the button, e.g. `button.label("godle")` labels the button `godle`. Default is `null`.
- `labelposition("top"|"bottom"|"left"|"right")`: determines where a label is placed. Default is `"bottom"`.
- `fontsize(FLOAT)` sets the fontsize of the label. Default is 12.
- `value()`: returns the current state of the button between `0` and  `button.actions().length-1`, so like `button.value()`. The value gets incremented every time the button is pressed.
- `click()`: you can also click the button by calling `button.click()`.

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

A slider is created like this:

```javascript
slider = widgets.slider()
```

`widgets.slider` has the following methods, all of which can be chained and when called without argument return the corresponding value. 

- `id(STRING)`: sets the slider's id. So e.g. `slider.id("wilk")` sets the id of `slider` to `"wilk"`. If not set, the id is set to a random string.
- `range([FLOAT,FLAT])`: sets the numerical range, so e.g. `slider.range([-3,5.5])` sets the range to `[-3,5.5]`. By default the range is `[0,1]`. 
- `update(FUNCTION)`: can be used to attach a function to a slider that is called everytime the slider is dragged, e.g. 
    ```javascript
    s = widgets.slider().update(()=>{console.log(s.value())})
    ```
    prints out the value of the slider.
- `set(FLOAT):` sets the slider to a specified value in the range of the slider, e.g. `slider.set(0.3)` sets the slider value to `0.3`.
- `size(FLOAT)`: sets the slider's length. So e.g. `slider.size(300)` sets the size to `300`. Default is `100`.
- `girth(FLOAT)`: sets the slider's width. So e.g. `slider.girth(20)` sets the width to `20`. Default is `8`. 
- `knob(FLOAT)`: sets the slider's knob's size. So e.g. `slider.knob(4)` sets the knobsize to `4`. Default is `8`. 
- `label(STRING)`: labels the slider. So e.g. `slider.label("stroink") labels the slider to `"stroink"`. Default is `""` (empty string).
- `show(true|false)`: if `true` shows the value of the slider. Default is `false`.
- `position({x:FLOAT,y:FLOAT})`: sets the position of the slider in the parent `svg` container.
- E.g. `button.position({x:50,y:150})` sets the position to (50,150) in the `svg` coordinate system. The anchor of the slider is on the left corner.
- `x(FLOAT)`: sets the x-coordinate of the slider in the parent `svg` container. E.g. `slider.x(50)` sets the x-coordinate to 50 in the `svg` coordinate system.
- `y(FLOAT)`: sets the y-coordinate of the slider in the parent `svg` container. E.g. `slider.y(300)` sets the y-coordinate to 300 in the `svg` coordinate system. 
- labelposition(STRING): sets the position of the label with respect to the slider. If the string contains `"top"` or `"bottom"`, the label is place above or below the slider, respectively. When it contains `"center"`, or `"left"` or `"right"` the label is horizontally placed accordingly. So e.g. `slider.labelposition("top-left")` place the label above and aligned on the left. Default is `"top-left"`.
- `fontsize(FLOAT)` sets the fontsize of the label. Default is 12.
- `value()`: returns the current value of the slider.

You can set many of the properties all at once by chaining, for example like this:

```javascript
slider = widgets.slider()
    .range([-3,4])
    .size(300)
    .girth(20)
    .knob(10)
    .label("slide me")
    .labelposition("center-bottom")
    .x(10)
    y.(20)
    .fontsize(30)
    .show(true)
```


## Toggle

A toggle a simple ON/OFF switsch is created like this:

```javascript
toggle = widgets.toggle()
```

The state of the toggle is either `true` or `false`.

`widgets.toggle` has the following methods, all of which can be chained and when called without argument return the corresponding value. 

- `id(STRING)`: sets the toggles's id. So e.g. `toggle.id("swutch")` sets the id of `toggle` to `"swutch"`. If not set, the id is set to a random string.
- `update(FUNCTION)`: can be used to attach a function to a toggle that is called everytime the toggle is switched.
    ```javascript
    s = widgets.toggle().update(()=>{console.log(s.value())})
    ```
- `size(FLOAT)`: sets the size of the switch, so e.g. `toggle.size(50)` makes switch of size `50`. Default is `10`
- `position({x:FLOAT,y:FLOAT})`: sets the position of the switch in the parent `svg` container. E.g. `toggle.position({x:50,y:150})` sets the position to (50,150) in the `svg` coordinate system. The anchor of the toggle is on the left corner.
- `x(FLOAT)`: sets the x-coordinate of the toggle in the parent `svg` container. E.g. `slider.x(50)` sets the x-coordinate to 50 in the `svg` coordinate system.
- `y(FLOAT)`: sets the y-coordinate of the toggle in the parent `svg` container. E.g. `slider.y(300)` sets the y-coordinate to 300 in the `svg` coordinate system. 
- `label(STRING)`: labels the toggle. So e.g. `toggle.label("rilly") labels the slider to `"rilly"`. Default is `""` (empty string).
- `labelposition("top"|"bottom"|"left"|"right")`: determines where a label is placed. Default is `"bottom"`.
- `fontsize(FLOAT)`: sets the fontsize of the label. Default is 12.
- `value()`: returns the current state of the toggle, either `true` or `false`
- `click()`: you can also click the toggle by calling `button.click()` and switch it.

You can set many of the properties all at once by chaining, as desribed for the slider and button widgets.

## Radio

The radio widget provides a set of mutually exclusive choice buttons: 

```javascript
radio = widgets.radio().choices(["apples","oranges","atomic bomb"])
```
generates a radio box with three buttons, labeled `"apples"`, `"oranges"`, and `"atomic bomb"` respectively. Unlike the other widgets, labels are required for the radio widget.

`widgets.radio` has the following methods, all of which can be chained and when called without argument return the corresponding value. 

- `id(STRING)`: sets the radiobox's id. So e.g. `radio.id("quillo")` sets the id of `radio` to `"quillo"`. If not set, the id is set to a random string.
- `choices(ARRAY)`: sets the choices for the radiobox, e.g. `radio.choices(["apples","oranges","banana"])` sets the choices the elements in the array and sets the number of choices to 3.
- `update(FUNCTION)`: can be used to attach a function to the radiobox that is called everytime a choice is made. E.g. this 
    ```javascript
    s = widgets.radio().choices(["banana","apple"])
        .update(()=>{console.log(s.choices[s.value()])})
    ```
    prints out the choice made.
- `size()`: sets the size of the row of buttons in the box, so e.g. `radio.size(250)` arranges the buttons in a row of size `250`. Default is `100`. Note: This is not the size of the buttons.	- `buttonsize()`: sets the size of the buttons in the box, so e.g. `radio.buttonsize(25)` sets the size of the buttons to `25`. Default is `20`.
- `buttonpadding()`: sets the relative size of the padding of the button with respect to the size of the button. This should be a number between 0 and 1, so e.g. `radio.buttonpadding(0.1)` sets the padding of the buttons to 10%. Default is `0.3`.
- `orientation("vertical"|"horizonal")`: determines whether radio buttons are arranged horizontally or vertically. So `radio.orientation("horizontal")` arranges buttons in a row. Default is `"vertical"`.
- `shape("round"|"rect")`: sets the shape of the buttons in the box to either rectangular or round. Default is `round`.
- `position({x:FLOAT,y:FLOAT})`: sets the position of the radiobox in the parent `svg` container. E.g. `radio.position({x:50,y:150})` sets the position to (50,150) in the `svg` coordinate system. The anchor of the radiobox is on the left corner.
- `x(FLOAT)`: sets the x-coordinate of the radiobox in the parent `svg` container. E.g. `radior.x(50)` sets the x-coordinate to 50 in the `svg` coordinate system.
- `y(FLOAT)`: sets the y-coordinate of the radiobox in the parent `svg` container. E.g. `radio.y(300)` sets the y-coordinate to 300 in the `svg` coordinate system. 
- `labelposition("top"|"bottom"|"left"|"right")`: determines where a label is placed. Default is `"bottom"`.
- `fontsize(FLOAT)`: sets the fontsize of the label. Default is 12.
- `value()`: returns the current state of the radiobox, i.e. the index of the selected choice.
- `click()`: you can also click one of the radio buttons by calling `button.click()` and switch it.

You can set many of the properties all at once by chaining, as desribed for the slider and button widgets.
## Grid

`widgets` also provides a `grid`function that can help placing the widgets on a lattice laid over the `svg` container where widgets are arranged.

```javascript
    const w = 400, h = 600;
    const Nx = 8, Ny = 16;
    svg = d3.select("body").append("svg").attr("width",w).attr("height",h);
    g = widgets.grid(w,h,Nx,Ny);
    svg.selectAll(".grid").data(g.points).enter().append("circle").attr("r",2)
        .attr("transform",d=>"translate("+d.x+","+d.y+)")
        .style("fill","black")
```
This will draw an equidistance coarse lattive in the parent `svg``

Methods:

- `grid.points`: are the points defining the grid. Each point is an object with `x` and `y` property.
- `grid.position()`: When called like `grid.position([1,2,3],5) returns a row of points in the grid at point x = 1,2,3 and y = 5.




