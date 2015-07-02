var und;

function Slide( name, caption, image ) {
	return {
		"name": name,
		"caption": caption,
		"image": image
	}
}
function Slideset( name, triggerName, slides ) {
	var obj = {
		"name": name,
		"slides": slides
	}
	
	if( typeof triggerName != "string" || ( typeof triggerName == "string" && triggerName.length <= 0 )) {
		var triggerObj = document.getElementById( "slideshowWrapper" );
		if( triggerObj != und ) {
			obj.addTrigger = triggerObj;
		}
	}
	return obj;
}

function Slideshow( triggerName, divName ) {
	if( typeof divName != "string" || ( typeof divName == "string" && divName.length <= 0 )) { divName = "slideshowWrapper"; }
	var slideWrapper = document.createElement( "div" );
	slideWrapper.setAttribute("id", divName );
	document.body.appendChild( slideWrapper );
	
	console.log( "Created slideshow: " + divName );
	
	var obj = {
		"slideSets": [],
		"wrapper": slideWrapper,
		"addSlideSet": function( set ) {
			this.slideSets.push ( set );
			console.log( "Added slideset: " + set.name);
			console.log( "Number of slidesets: " + this.slideSets.length);
		},
		"addSlideSets": function( set ) {
			console.log( set.length );
			
			if( typeof set == "object" && set.length >= 1 ) {
				for( var x = 0; x < set.length; x++ ) {
					this.addSlideSet ( set[x] );
				}
			}
			
		},
		"addTrigger": function( triggerObj ) {
			
		},
	};
	
	return obj;
}