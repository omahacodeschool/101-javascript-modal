window.addEventListener("load", function() {

	var modalLinks = document.getElementsByClassName("modal-link");
	for (var i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener("click", displayModal);
	}

	function displayModal(event) {
		var background = document.getElementsByClassName("modal-background");
		background[0].style.display = "block";

		var modal = document.getElementById(event.target.dataset.modalContent);
		modal.style.display = "block";
	}

});