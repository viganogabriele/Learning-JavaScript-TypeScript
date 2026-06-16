const btnToss = document.querySelector(".btn--toss");
const resultContainer = document.querySelector(".result-container");
const imgToss = document.querySelector(".img--toss");

btnToss.addEventListener("click", () => {
	resultContainer.innerHTML = "";
	let result = document.createElement("p");
	let random = Math.random() < 0.5 ? "Head" : "Tail";

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
});
