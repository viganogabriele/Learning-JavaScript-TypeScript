const btnToss = document.querySelector(".btn--toss");
const resultContainer = document.querySelector(".result-container");
const imgToss = document.querySelector(".img--toss");

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
	}, 200);
});

imgToss.addEventListener("click", () => btnToss.click());
