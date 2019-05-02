function pageLoad() {
	setTimeout(showContent,1000);
	setTimeout(hideLoader,1000);
}
function showContent() {
	document.getElementById("content").style.opacity='1';
}
function hideLoader() {
	document.getElementById("loader").style.display='none';
}