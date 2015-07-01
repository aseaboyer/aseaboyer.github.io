document.addEventListener('DOMContentLoaded',function(){ /* DOM ready */

	var menuToggle = document.getElementById( 'MenuToggle' );
	menuToggle.addEventListener("click", function ( e ) {
		document.body.classList.toggle( "menuOpen" );
		jogScrollEvent();
		e.preventDefault();
	}, false);
	var h1 = document.getElementsByTagName( 'h1' );
	h1[0].addEventListener("click", function ( e ) {
		document.body.classList.toggle( "menuOpen" );
		jogScrollEvent();
		e.preventDefault();
	}, false);
	var menuItems = document.getElementsByClassName( 'nav-item' )
	for( var x = 0; x < menuItems.length; x++ ) {
		menuItems[x].addEventListener("click", function ( e ) {
			document.body.classList.remove( "menuOpen" );
			jogScrollEvent();
		}, false);
	}
	
	document.body.onscroll = function(){
		jogScrollEvent();
	};
	
	var sections = document.getElementsByTagName( "section" );
	var nav = document.getElementsByTagName( "nav" );
	function jogScrollEvent() {
		var selectedID = 0;
		for( var x = 0; x < sections.length; x++ ) {
			document.getElementById( sections[x].id+'-link' ).classList.remove( 'selected' );
			sections[x].classList.remove( 'active' );
			if( document.body.scrollTop >= (sections[x].offsetTop-50) ) { selectedID = x; }
		}
		//console.log( document.body.scrollTop + ' - ' + sections[selectedID].id );
		document.getElementById( sections[selectedID].id+'-link' ).classList.add( 'selected' );
		sections[selectedID].classList.add( 'active' );
		nav[0].style.top = document.body.scrollTop + 'px';
	}
});