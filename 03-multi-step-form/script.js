let currentStepIndex = 0;
let selectedTopic = "";

const form = document.querySelector(".form");
const steps = [...document.querySelectorAll(".step")];
const nextButtons = document.querySelectorAll(".step__btn-next");
const backButtons = document.querySelectorAll(".step__btn-back");
const topicInputs = document.querySelectorAll('input[name="topic"]');
const newsletterSteps = document.querySelectorAll('[data-step="newsletter"]');

function showStep(stepElement) {
	steps.forEach((step) => {
		step.classList.remove("step--active");
	});

	stepElement.classList.add("step--active");
}

function validateControls(stepElement) {
	const inputs = stepElement.querySelectorAll("input");

	for (const input of inputs) {
		if (!input.checkValidity()) {
			input.reportValidity();
			return false;
		}
	}
	return true;
}

function getSelectedTopic() {
	for (const input of topicInputs) {
		if (input.checked) {
			return input.value;
		}
	}

	return "";
}
