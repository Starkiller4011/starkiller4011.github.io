$(document).ready(function(){
  $("#nav-menu-button").click(function(){
    $("#nav-menu").slideToggle("slow");
  });
	$("#nav-menu-overlay").click(function() {
		$("#nav-menu").slideUp();
	});
	$("#nav-menu ul li a").click(function() {
		$("#nav-menu").slideUp();
	});
});