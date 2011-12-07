$(function(){
	//
	// Grab width of ENTRY
	//
	var entry = $(".entry");
	var entryWidth = entry.outerWidth(true);
	
	//
	// Count number of ENTRY and multiply by ENTRY width to get total width of content
	//
	var entryCount = entry.length;
	var bodyLength = entryCount * entryWidth;
	
	//
	// Pass content width to body to create horizontal scroll
	//		
	$('body').css('width', bodyLength);
	
	//
	// Grab height of WRAPPER element 
	//
	var eventWrapper = $('.event-wrapper');
	var wrapperHeight = eventWrapper.outerHeight(true);
	
	//
	// Pass WRAPPER element height to body and ENTRY element 
	//
	$('body').css('height', wrapperHeight);
	$('.entry').css('height', wrapperHeight);
	
	//
	// Count number of DESCRIPTIONS within each ENTRY
	//
	// Need to get total height of descriptions within a given entry and subtract it from the height of the entry; then add 15 and pass that final number to the marginTop of the _first_ description within the entry.
	
	$('.entry').each(function(){
		$('description').each(function(){
			// The description heights vary; must be saved somehow so that we can calculate the total height of descriptions;
			// descriptionHeight1 + descriptionHeight2 = totalHeight
			var descriptionHeight = $(this).outerHeight;
			var totalHeight = ;
		});
	});
});