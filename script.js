window.addEventListener("load", function() {
	var addNoteButton = document.getElementById("add-note");
	addNoteButton.addEventListener("click", displayModal);

	var secondModal = document.getElementById("modal-two");
	secondModal.addEventListener("click", displayModalTwo);

	var thirdModal = document.getElementById("modal-three");
	thirdModal.addEventListener("click", displayModalThree);

	function displayModal() {
		var background = document.getElementsByClassName("modal-background");
		background[0].style.display = "block";

		var modalElements = document.getElementsByClassName("add-note");
		for (var i = 0; i < modalElements.length; i++) {
			modalElements[i].style.display = "block";
		}
	}

	function displayModalTwo() {
		var background = document.getElementsByClassName("modal-background");
		background[0].style.display = "block";

		var modalElements = document.getElementsByClassName("modal-two");
		for (var i = 0; i < modalElements.length; i++) {
			modalElements[i].style.display = "block";
		}
	}

	function displayModalThree() {
		var background = document.getElementsByClassName("modal-background");
		background[0].style.display = "block";
		
		var modalElements = document.getElementsByClassName("modal-three");
		for (var i = 0; i < modalElements.length; i++) {
			modalElements[i].style.display = "block";
		}
	}
});