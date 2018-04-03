$("#mainWrapper").on("scroll", function(e) {
	$("#topLink").css("opacity", this.scrollTop / (document.getElementById('mainBanner').clientHeight - document.getElementById('mainHeader').clientHeight - 4));
	$("#mainHeaderBG").css("opacity", this.scrollTop / (document.getElementById('mainBanner').clientHeight - document.getElementById('mainHeader').clientHeight - 4));
	if (this.scrollTop > (document.getElementById('mainBanner').clientHeight - document.getElementById('mainHeader').clientHeight - 4)) {
		$("#mainHeaderBanner").addClass("headerBannerStateTwo");
		$("#mainHeaderBanner").removeClass("headerBannerStateOne");
	} else {
		$("#mainHeaderBanner").addClass("headerBannerStateOne");
		$("#mainHeaderBanner").removeClass("headerBannerStateTwo");
	}
});