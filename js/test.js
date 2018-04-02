var vh = $(window).height();
var vw = $(window).width();

var debug = $("#debugLog");

var wrap = $("#mainWrapper");
var mainBanner = $("#mainBanner");

wrap.on("scroll", function(e) {
    debug.text(this.scrollTop)
	if (this.scrollTop > 700 - (0.15*vh)) {
		mainBanner.addClass("scrollHiddenBanner");
		debug.text("Threshold passed:");
	} else {
		mainBanner.removeClass("scrollHiddenBanner");
	}
});