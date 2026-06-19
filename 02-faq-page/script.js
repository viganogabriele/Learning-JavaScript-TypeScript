const filterButtons = document.querySelectorAll(".faq-filters__btn");
const faqPanels = document.querySelectorAll(".faq-panel");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelector(".faq-filters__btn--active")
      .classList.remove("faq-filters__btn--active");

    button.classList.add("faq-filters__btn--active");

    const targetID = button.dataset.target;

    document
      .querySelector(".faq-panel--active")
      .classList.remove("faq-panel--active");

    document.querySelector(`#${targetID}`).classList.add("faq-panel--active");
  });
});
