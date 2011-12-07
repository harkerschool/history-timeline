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
	// Remove bottom margin off of last DESCRIPTION 
	//
	$('.entry').last().children('.description').css('margin-bottom', 0);
	
	//
	// Grab height of WRAPPER element 
	//
	var eventWrapper = $('.event-wrapper');
	var wrapperHeight = eventWrapper.outerHeight(true);
	
	//
	// Pass WRAPPER element height to BODY element 
	//
	$('body').css('height', wrapperHeight);
	
	//
	// Count number of DESCRIPTIONS within each ENTRY
	//
	// Need to get total height of descriptions within a given entry and subtract it from the height of the entry; then add 15 and pass that final number to the marginTop of the _first_ description within the entry.
	
	$('.entry').each(function(){
		var totalHeight = 0;
		$(this).children('.description').each(function(){
			var descriptionHeight = $(this).outerHeight(true);
			totalHeight += descriptionHeight;
		});
		
		var newMargin = wrapperHeight - totalHeight - 20;
		$(this).css('margin-top', newMargin);
		$(this).css('height', totalHeight);
	});
});