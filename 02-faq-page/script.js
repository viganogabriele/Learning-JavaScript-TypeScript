const filterButtons = document.querySelectorAll(".faq-filters__btn");
const faqPanels = document.querySelectorAll(".faq-panel");
let openedFaqs = [];
const MAX_OPENED = 2;

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openedFaqs.forEach((item) => item.classList.remove("faq-item--active"));

    document
      .querySelector(".faq-filters__btn--active")
      .classList.remove("faq-filters__btn--active");

    button.classList.add("faq-filters__btn--active");

    const targetID = button.dataset.target;

    document
      .querySelector(".faq-panel--active")
      .classList.remove("faq-panel--active");

    document.querySelector(`#${targetID}`).classList.add("faq-panel--active");

    initPanelFaqs(targetID);
  });
});

const faqItem = document.querySelectorAll(".faq-item");
const faqQuestion = document.querySelectorAll(".faq-item__question");

faqQuestion.forEach((button) => {
  button.addEventListener("click", () => {
    const parentItem = button.closest(".faq-item");

    if (parentItem.classList.contains("faq-item--active")) {
      parentItem.classList.remove("faq-item--active");

      openedFaqs = openedFaqs.filter((item) => item !== parentItem);
    } else {
      parentItem.classList.add("faq-item--active");
      openedFaqs.push(parentItem);
    }

    if (openedFaqs.length > MAX_OPENED) {
      const itemRemove = openedFaqs.shift();
      itemRemove.classList.remove("faq-item--active");
    }
  });
});

function initPanelFaqs(panelID) {
  const currentPanel = document.querySelector(`#${panelID}`);

  const panelFaqs = currentPanel.querySelectorAll(".faq-item");
  openedFaqs = Array.from(panelFaqs).slice(0, MAX_OPENED);

  openedFaqs.forEach((faq) => {
    faq.classList.add("faq-item--active");
  });
}

// Initialize openedFaqs and faq-item to show
const initialPanelId = document.querySelector(".faq-panel--active").id;
initPanelFaqs(initialPanelId);
