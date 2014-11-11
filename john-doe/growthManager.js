var GrowthManager = function( scene ) {
	
	this.scene = scene;	
	this.growths = [];
	
	this.generate( 10 );
	
};

GrowthManager.prototype = {
	
	generate : function( count ) {
		
		for( var i=0; i < count; i++ ) {
			
			this.growths.push( new Growth( this.scene ) );
			
		}
		
	},
	
	update : function( dt ) {
		
		for( var i=0; i < this.growths.length; i++ ) {
			
			this.growths[i].update(dt);
			
		}
		
	}
		
};