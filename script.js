window.addEventListener("load", function() {
	var addNoteButton = document.getElementById("add-note");
	addNoteButton.addEventListener("click", displayModal);

	function displayModal() {
		var modalElements = document.getElementsByClassName("modal");
		console.log(modalElements.length);
		for (var i = 0; i < modalElements.length; i++) {
			console.log("Starting on index " + i + " of modalElements");
			modalElements[i].classList.toggle("modal-hide");
		}
	}
});