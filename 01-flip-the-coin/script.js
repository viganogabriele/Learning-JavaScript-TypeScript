const btnToss = document.querySelector(".btn--toss");
const resultContainer = document.querySelector(".result-container");
const imgToss = document.querySelector(".img--toss");

const createScoreTracker = () => {
	let heads = 0;
	let tails = 0;

	const headsDisplay = document.querySelector("#heads-score");
	const tailsDisplay = document.querySelector("#tails-score");

	return (result) => {
		if (result === "Head") {
			heads++;
			if (headsDisplay) headsDisplay.textContent = heads;
		} else {
			tails++;
			if (tailsDisplay) tailsDisplay.textContent = tails;
		}
	};
};

const updateScore = createScoreTracker();

btnToss.addEventListener("click", () => {
	imgToss.classList.remove("animation-toss");
	void imgToss.offsetWidth;
	imgToss.classList.add("animation-toss");

	// Calculate the result
	let random = Math.random() < 0.5 ? "Head" : "Tail";

	// Delay the visual refresh by 200 milliseconds
	setTimeout(() => {
		resultContainer.innerHTML = "";
		let result = document.createElement("p");

		result.classList.add("text-result");
		result.textContent = random;

		if (random === "Head") {
			imgToss.setAttribute("src", "assets/coin-head.png");
			imgToss.setAttribute("alt", "head");
		} else {
			imgToss.setAttribute("src", "assets/coin-tail.png");
			imgToss.setAttribute("alt", "tail");
		}

		resultContainer.appendChild(result);
		updateScore(random);
	}, 200);
});

imgToss.addEventListener("click", () => btnToss.click());
