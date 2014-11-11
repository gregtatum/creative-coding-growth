Creative Coding: Growth
==============

This is the code for a creative coding hack session based on the theme of "Growth", as in a time lapse of a plant growing. We'll meet in person, or remotely if you can't make it and see what we each can come up with in a defined period of time. This code is using the 2d canvas. If you're just beginning with this type of coding you can read up on it a bit:

* [MDN Canvas Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [A tutorial I wrote](http://www.webdesignerdepot.com/2014/10/how-to-draw-beautiful-things-in-the-browser/)

## Getting started

1. Fork this repo and create new branch.
2. Copy john-doe and replace with your name, or multiple copies e.g. jane-doe-1, jane-doe-2
3. Create and modify the code only in your user directory.
4. Once we're done I'll merge everything into master and share out the results.

## Navigate the code:

I kept things simple without any preprocessors. Include your js files through `<script>` tags. Everything is done in a very OOP style. In the john-doe file I separated out each object into its own file. Some included code you should be aware of is the [Vector2](http://threejs.org/docs/#Reference/Math/Vector2) class from Three.js, which is an object of the following structure with some convenience methods on it to make it easier to work with:

	>> var v = new THREE.Vector2(1,5);
	{
		x:1,
		y:5
	}
	
	>> v.length();
	5.0990195135927845

I have some color utilities in `common/colors.js` and some random number generators in `common/random.js`.

## new Scene()

This is the basic scene graph with some utilities to start up the loop. Manually start your objects in the constructor and add them to the update loop. This object is created automatically at the bottom of the script on document ready. Most likely you won't add much code here, just the commands to start and update your objects.

##### Useful Public properties:

 * `scene.ratio` - the device pixel ratio, for retina displays
 * `scene.$canvas` - a jQuery wrapped canvas
 * `scene.canvas` - the canvas element
 * `scene.context` - the context for the canvas, what you do all the drawing with
 * `scene.currentTime` - the current time in unix epoch time in milliseconds
 * `scene.showStats` - a switch to show or hide the stats
 * `scene.width` - the width if the canvas in pixels (will be double the screen width on retina)
 * `scene.height` - the height if the canvas in pixels (will be double the screen height on retina)
 * `scene.left` - the left offset of the canvas (0 in this setup)
 * `scene.top` - the left top of the canvas (0 in this setup)

## GrowthManager()

A simple manager for loading up multiple `Growth` objects. Every object created gets a reference to the scene.

## Growth()

A simple growth entity.

##### Properties:

* growth.scene - A reference to the main scene
* growth.color - The color as a style designation, e.g. "hsl(133,50%,50%)"
* growth.base - The base vector
* growth.lines - An array of vectors making up the growth line