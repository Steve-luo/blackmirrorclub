document.getElementById("defaultTab").click();
function switchSeason(evt, seasonNumber) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("seasonTabContent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("seasonTabLink");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(seasonNumber).style.display = "block";
	evt.currentTarget.className += " active";
}