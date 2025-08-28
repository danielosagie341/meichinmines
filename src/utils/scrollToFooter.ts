/**
 * Smoothly scrolls to the element by ID.
 * Optionally closes a menu via callback after scrolling.
 * 
 * @param elementId The ID of the element to scroll to
 * @param onAfterScroll Optional callback (e.g., to close a menu)
 */
export const scrollToElement = (elementId: string, onAfterScroll?: () => void): void => {
  const el = document.getElementById(elementId);

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }

  if (onAfterScroll) {
    onAfterScroll();
  }
};