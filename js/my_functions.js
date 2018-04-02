var vh = $(window).height();
var vw = $(window).width();

var wrap = $("#scroll_wrap");

wrap.on("scroll", function(e) {
	if (this.scrollTop >= 147) {
		wrap.addClass("in_focus")
	} else {
		wrap.removeClass("in_focus");
	}
});