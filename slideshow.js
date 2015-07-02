var und;

function Slide( name, caption, image ) {
	var img = new Image(); // easy preloading
		img.src = image;
	
	var obj = {
		"name": name,
		"caption": caption,
		"image": image,
		"img": img
	}
	
	return obj;
}
function Slideset( name, triggerName, slides ) {
	var obj = {
		"name": name,
		"slides": slides,
		"trigger": document.getElementById( triggerName ),
		/*"addTrigger": function ( slideshow, owner, newTrigger ) {
			this.trigger = newTrigger;
			
			newTrigger.addEventListener("click", function ( e ) {
				console.log( "Open " + this.name );
				slideshow.open( this.name );
				e.preventDefault();
			}, false);
		},*/
	}
	
	return obj;
}

function Slideshow( triggerName, divName ) {
	if( typeof divName != "string" || ( typeof divName == "string" && divName.length <= 0 )) { divName = "slideshowWrapper"; }
	var slideWrapper = document.createElement( "div" );
	slideWrapper.setAttribute( "id", divName );
	document.body.appendChild( slideWrapper );
	
	var obj = {
		"slideSets": [],
		"wrapper": slideWrapper,
		"currentSet": 0,
		"currentSlide": 0,
		"addSlideSet": function( set ) {
			this.slideSets.push ( set );
			console.log( "Added slideset: " + set.name);
			console.log( "Number of slidesets: " + this.slideSets.length);
		},
		"addSlideSets": function( set ) {
			
			if( typeof set == "object" && set.length >= 1 ) {
				for( var x = 0; x < set.length; x++ ) {
					this.addSlideSet ( set[x] );
					this.addSlideSetTrigger ( x, set[x].trigger );
				}
			}
			
		},
		"addSlideSetTrigger": function ( num, newTrigger ) {
			var thisObj = this; // scope
		
			newTrigger.addEventListener("click", function ( e ) {
				console.log( "Open " + num );
				thisObj.open( num );
				e.preventDefault();
			}, false);
		
			/*console.log( newTrigger );
			if( newTrigger != und ) {
				set.addTrigger( this, newTrigger );
				console.log( "Add trigger " + triggerName );
			}*/
		},
		"open": function ( id ) {
			// init on open
			var thisObj = this;
			console.log( "Please open set name, " + this.slideSets[id].name );
			this.currentSet = id;
			this.currentSlide = 0;
			
			// create close button
			var closeButton = document.createElement( "div" );
				closeButton.classList.add( "closeButton", "slideButton" );
				closeButton.innerHTML = "<i class='fa fa-times fa-2'></i>";
				closeButton.addEventListener("click", function ( e ) {
					thisObj.close( id );
					e.preventDefault();
				}, false);
				this.wrapper.appendChild( closeButton );
			
			// create prev button
			var prevButton = document.createElement( "div" );
				prevButton.classList.add( "prevButton", "slideButton" );
				prevButton.innerHTML = "<i class='fa fa-arrow-left fa-2'></i>";
				prevButton.addEventListener("click", function ( e ) {
					thisObj.prevSlide();
					e.preventDefault();
				}, false);
				this.wrapper.appendChild( prevButton );
				
			// create next button
			var nextButton = document.createElement( "div" );
				nextButton.classList.add( "nextButton", "slideButton" );
				nextButton.innerHTML = "<i class='fa fa-arrow-right fa-2'></i>";
				nextButton.addEventListener("click", function ( e ) {
					thisObj.nextSlide();
					e.preventDefault();
				}, false);
				this.wrapper.appendChild( nextButton );
				
			// create info text area
			var infoBox = document.createElement( "div" );
				infoBox.setAttribute( "id", "SlideshowInfo" );
				infoBox.classList.add( "info" );
				infoBox.addEventListener("click", function ( e ) {
					thisObj.nextSlide();
					e.preventDefault();
				}, false);
				this.wrapper.appendChild( infoBox );
			
			// how do we do slides?
			var slideBox = document.createElement( "div" );
				slideBox.setAttribute( "id", "SlideshowSlide" );
				slideBox.classList.add( "slide" );
				this.wrapper.appendChild( slideBox );
			
			// how do we do slides?
			
			this.wrapper.classList.add( "open" );
			//this.wrapper.innerHTML = this.slideSets[id].name;
			
			this.loadSlide();
		},
		"close": function () {
			this.wrapper.classList.remove( "open" );
			this.wrapper.innerHTML = '';
		},
		"prevSlide": function () {
			this.currentSlide--;
			if( this.currentSlide < 0) {
				this.currentSlide = 0;
			} else {
				this.loadSlide();
			}
			console.log( this.currentSlide );
		},
		"nextSlide": function () {
			this.currentSlide++;
			if( this.currentSlide > this.slideSets[ this.currentSet ].slides.length ) {
				this.currentSlide = this.slideSets[ this.currentSet ].slides.length;
			} else {
				this.loadSlide();
			}
			console.log( this.currentSlide );
		},
		"loadSlide": function () {
		//	this.slideSets[ this.currentSet ].slides[ this.currentSlide ].image;
			var captionDiv = document.getElementById( 'SlideshowInfo' );
				captionDiv.innerHTML = this.slideSets[ this.currentSet ].slides[ this.currentSlide ].caption;
				
			var slideDiv = document.getElementById( 'SlideshowSlide' );
				slideDiv.style.backgroundImage = "url('" + this.slideSets[ this.currentSet ].slides[ this.currentSlide ].image + "')";
			
			console.log( "loadSlide " + this.currentSlide );
		},
	};
	
	return obj;
}