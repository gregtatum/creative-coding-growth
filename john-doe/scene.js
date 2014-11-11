var Scene = function() {

	//This is the constructor which will load up the scene, an instance is created at the bottom of the page.
	
	this.ratio = window.devicePixelRatio >= 1 ? window.devicePixelRatio : 1; //Is this a retina display?	
	this.$canvas = $('canvas');								//Get a reference to the jQuery object
	this.canvas = this.$canvas.get(0);						//Get a reference to the DOM element
	this.context = this.canvas.getContext( '2d' );			//Get a reference to the 2d context, so you can make all of the drawing calls
	this.currentTime = this.prevTime = new Date().getTime();	//Timing variables
	this.showStats = true;									//Show the framerate

	//Defined below
	this.width = null;
	this.height = null;
	this.left = null;
	this.top = null;
	
	this.addEventListeners();					//Add any event listeners here
	this.resizeCanvas();						//Size the canvas to be full width
	if( this.showStats ) this.addStats();		//Show framerates

	//User code
	this.growthManager = new GrowthManager( this );
	
	//--------------------------------------------------------------
	// Start the loop!

	this.loop();
	
	
};
		
Scene.prototype = {
	
	addStats : function() {

		//Third party framerate display
		this.stats = new Stats();
		this.stats.domElement.style.position = 'absolute';
		this.stats.domElement.style.top = '0px';
		$("#container").append( this.stats.domElement );
		
	},
	
	addEventListeners : function() {
		$(window).on('resize', this.resizeCanvas.bind(this));
	},
	
	resizeCanvas : function(e) {
		this.canvas.width = $(window).width() * this.ratio;
		this.canvas.height = $(window).height() * this.ratio;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.left = this.$canvas.offset().left;
		this.top = this.$canvas.offset().top;
	},
			
	loop : function() {
		
		//this is the change in time in milliseconds
		var dt;

		this.currentTime = new Date().getTime();

		dt = this.currentTime - this.prevTime;

		//Update then request a new animation frame
		this.update( dt );
		requestAnimationFrame( this.loop.bind(this) );
		
		this.prevTime = this.currentTime;

	},
	
	update : function( dt ) {
		
		if( this.showStats ) this.stats.update();
		
		//Clear the canvas
		this.context.clearRect(0,0,this.width, this.height);
		
		//Start your update code here
		this.growthManager.update( dt )
		
	}
	
};

var scene;

$(function() {
	scene = new Scene();
});