document.getElementById("left2").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "index.html"; // Change this URL to the desired page
});
document.getElementById("right2").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "projects.html"; // Change this URL to the desired page
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
	document.querySelector(".nav").classList.toggle("active");
	document.querySelector(".hamburger").classList.toggle("active");
});
