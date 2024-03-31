document.getElementById("left1").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "contact.html"; // Change this URL to the desired page
});
document.getElementById("right1").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "about.html"; // Change this URL to the desired page
});
document.getElementById("contact").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "contact.html"; // Change this URL to the desired page
});
document.getElementById("download").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open(
		"https://drive.google.com/file/d/1PEmsspOcolQhOqPDhKmJ8oO7nxZiWCsG/view?usp=sharing",
		"_blank"
	);
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
	document.querySelector(".nav").classList.toggle("active");
	document.querySelector(".hamburger").classList.toggle("active");
});
