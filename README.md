# d3-widgets

```d3-widgets.js``` provides widgets (buttons, sliders, toggles and radioboxes) to augment your d3-visualization.

> Note: A comprehensive documentation is stimm missing.... will come soon.

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

Alternatively, use a local copy (`dist/d3-widgets.js`) and include it  in your `html`-file like so:

```html
<script src="d3-widgets.js"></script>
```

```html
<script>
	
	const b = widgets.button().size(100).shape("rect")
	
</script>
```

If you want to use it as part of your own project as a module import `@dirkbrockmann/d3-widgets` like so:

```js
import * as widgets from "d3-widgets"
```


> Note: A comprehensive documentation is stimm missing.... will come soon.

# Widgets

## Button

## Slider

## Toggle

## Radio