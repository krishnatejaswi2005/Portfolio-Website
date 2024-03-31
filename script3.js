document.getElementById("left3").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "about.html"; // Change this URL to the desired page
});
document.getElementById("right3").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.location.href = "contact.html"; // Change this URL to the desired page
});
document
	.getElementById("spotify-github")
	.addEventListener("click", function () {
		// Redirect the user to the desired page
		window.open(
			"https://github.com/krishnatejaswi2005/Spotify-Clone",
			"_blank"
		);
	});
document.getElementById("spotify").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open("https://krishnatejaswi2005.github.io/Spotify-Clone/", "_blank"); // Change this URL to the desired page
});
document.getElementById("github-rps").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open(
		"https://github.com/krishnatejaswi2005/Rock-Paper-Scissors-Game",
		"_blank"
	); // Change this URL to the desired page
});
document.getElementById("rps").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open(
		"https://krishnatejaswi2005.github.io/Rock-Paper-Scissors-Game/",
		"_blank"
	); // Change this URL to the desired page
});
document.getElementById("github-ttt").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open(
		"https://github.com/krishnatejaswi2005/Tic-Tac-Toe-Game",
		"_blank"
	); // Change this URL to the desired page
});
document.getElementById("ttt").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open(
		"https://krishnatejaswi2005.github.io/Tic-Tac-Toe-Game/",
		"_blank"
	); // Change this URL to the desired page
});
document
	.getElementById("github-darkmode")
	.addEventListener("click", function () {
		// Redirect the user to the desired page
		window.open("https://github.com/krishnatejaswi2005/Dark-Mode", "_blank"); // Change this URL to the desired page
	});
document.getElementById("darkmode").addEventListener("click", function () {
	// Redirect the user to the desired page
	window.open("https://krishnatejaswi2005.github.io/Dark-Mode/", "_blank"); // Change this URL to the desired page
});
document.querySelector(".menu-toggle").addEventListener("click", function () {
	document.querySelector(".nav").classList.toggle("active");
	document.querySelector(".hamburger").classList.toggle("active");
});
