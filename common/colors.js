function rgbToFillStyle(r, g, b, a) {
	if(a === undefined) {
		return ["rgb(",r,",",g,",",b,")"].join('');
	} else {
		return ["rgba(",r,",",g,",",b,",",a,")"].join('');
	}
}

function hslToFillStyle(h, s, l, a) {
	if(a === undefined) {
		return ["hsl(",h,",",s,"%,",l,"%)"].join('');
	} else {
		return ["hsla(",h,",",s,"%,",l,"%,",a,")"].join('');
	}
}
