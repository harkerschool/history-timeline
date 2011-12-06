$(function(){
	var entry = $(".entry");
	var entryWidth = entry.outerWidth(true);
	var entryCount = entry.length;
	var bodyLength = entryCount * entryWidth;
			
	$('body').css('width', bodyLength);
});