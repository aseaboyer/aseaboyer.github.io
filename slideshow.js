function Slide( name, caption, image ) {
	return {
		"name": name,
		"caption": caption,
		"image": image
	}
}
function Slideset( name, slides ) {
	return {
		"name": name,
		"slides": slides
	}
}

function Slideshow( ) {
	return {
		"slideSets": [],
		"addSlideSet": function( set ) {
			slideSets.push ( set );
			console.log( "Added slideset: " + set.name);
			console.log( "Number of slidesets: " + this.slideSets.length);
		}
	}
}