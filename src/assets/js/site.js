document.addEventListener("DOMContentLoaded", () => {
  const expandableGroups = document.querySelectorAll("[data-expandable-projects]");

  expandableGroups.forEach((group) => {
    const trigger = group.querySelector("[data-expandable-trigger]");
    const panel = group.querySelector("[data-expandable-panel]");

    if (!trigger || !panel) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";
      const nextIsOpen = !isOpen;

      trigger.setAttribute("aria-expanded", String(nextIsOpen));
      panel.classList.toggle("is-open", nextIsOpen);

      trigger.textContent = nextIsOpen
        ? "Hide supporting projects"
        : "View more supporting projects";
    });
  });
});