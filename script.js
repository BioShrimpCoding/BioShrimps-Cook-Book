document.querySelectorAll(".description-toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".game-card");
    const description = card.querySelector(".game-description");
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";

    description.hidden = isExpanded;
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.textContent = isExpanded ? "Show more" : "Show less";
  });
});