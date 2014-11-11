var Growth = function( scene ) {
	
	this.scene = scene;
	this.color = hslToFillStyle( random.rangeInt(120,140), 50, 50 );
	
	this.base = new THREE.Vector2(
		random.range( 0, this.scene.width ),
		this.scene.height
	);
	
	this.lines = [ this.base ]
	
	this.generate( 5 )
};

Growth.prototype = {
	
	generate : function( count ) {
		
		for( var i=1; i < count; i++ ) {
			
			var v = new THREE.Vector2().copy( this.base );
			
			v.y -= i * 5;
			
			this.lines.push( v );
			
		}
		
	},
	
	update : function( dt ) {

		var ctx = this.scene.context;
		
		ctx.strokeStyle = this.color;
		ctx.lineCap = "round";
		
		var height = this.base.y - this.lines[ this.lines.length - 1 ].y;
		
		for( var i=1; i < this.lines.length; i++ ) {
			
			var beg = this.lines[i-1];
			var end = this.lines[i];
			
			end.x -= random.range(-i, i) * dt * 0.1;
			end.y -= random.range(0, i) * dt * 0.1;

			ctx.beginPath();
			ctx.lineWidth = 5 * this.scene.ratio * (this.lines.length - i) * height / this.scene.height;
			
			ctx.moveTo( beg.x, beg.y );
			ctx.lineTo( end.x, end.y );
			
			ctx.stroke();
			ctx.closePath();
			
		}
		
		
	}
	
};