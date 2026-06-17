const btnToss = document.querySelector(".btn--toss");
const resultContainer = document.querySelector(".result-container");
const imgToss = document.querySelector(".img--toss");

const createScoreTracker = () => {
	let heads = 0;
	let tails = 0;

	const headsDisplay = document.querySelector("#heads-score");
	const tailsDisplay = document.querySelector("#tails-score");
	const iconHead = document.querySelector(".score-board__icon--head");
	const iconTail = document.querySelector(".score-board__icon--tail");

	return (result) => {
		if (result === "Head") {
			heads++;
			if (headsDisplay) headsDisplay.textContent = heads;
			if (iconHead) {
				iconHead.classList.remove("animation-icon");
				void iconHead.offsetWidth;
				iconHead.classList.add("animation-icon");
			}
		} else {
			tails++;
			if (tailsDisplay) tailsDisplay.textContent = tails;
			if (iconTail) {
				iconTail.classList.remove("animation-icon");
				void iconTail.offsetWidth;
				iconTail.classList.add("animation-icon");
			}
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
