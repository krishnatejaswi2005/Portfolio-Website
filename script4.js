document.getElementById("left4").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "projects.html"; // Change this URL to the desired page
});

document.getElementById("right4").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "index.html"; // Change this URL to the desired page
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
	document.querySelector(".nav").classList.toggle("active");
	document.querySelector(".hamburger").classList.toggle("active");
});
