// Document Elements
var header;
var banner;

// Dimension Variables
var vh = $(window).height();
var vw = $(window).width();
var headerWidth;
var headerHeight;
var bannerWidth;
var bannerHeight;

// Debug log zones
var debugHeaderWidth = $("#headerWidth");
var debugHeaderHeight = $("#headerHeight");
var debugBannerWidth = $("#bannerWidth");
var debugBannerHeight = $("#bannerHeight");
var debugCurrentState = $("#bannerState");
var debugScrollPosition = $("#scrollPosition");

// Scroll wrapper
var wrap = $("#mainWrapper");
var mainBanner = $("#mainBanner");

$('document').ready(function(){
	header = document.getElementById('mainHeader');
	banner = document.getElementById('mainBanner');
	headerWidth = header.clientWidth;
	headerHeight = header.clientHeight;
	bannerWidth = banner.clientWidth;
	bannerHeight = banner.clientHeight;
	debugHeaderWidth.text(headerWidth);
	debugHeaderHeight.text(headerHeight);
	debugBannerWidth.text(bannerWidth);
	debugBannerHeight.text(bannerHeight);
	debugCurrentState.text("Banner displayed");
	debugScrollPosition.text("0");
});

$(window).bind("resize", function() {
	vh = $(window).height();
	vw = $(window).width();
	headerWidth = header.clientWidth;
	headerHeight = header.clientHeight;
	bannerWidth = banner.clientWidth;
	bannerHeight = banner.clientHeight;
	debugHeaderWidth.text(headerWidth);
	debugHeaderHeight.text(headerHeight);
	debugBannerWidth.text(bannerWidth);
	debugBannerHeight.text(bannerHeight);
});

wrap.on("scroll", function(e) {
	debugScrollPosition.text(this.scrollTop);
	if (this.scrollTop > (bannerHeight - headerHeight - 4)) {
		debugCurrentState.text("Banner displayed");
		mainBanner.addClass("headerBanner");
		mainBanner.style.transform("translate(0, ${headerHeight - bannerHeight + 4})");
	} else {
		debugCurrentState.text("Banner in header");
		mainBanner.removeClass("headerBanner");
	}
});