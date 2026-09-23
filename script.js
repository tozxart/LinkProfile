(() => {
  const layers = document.querySelectorAll(".bg__layer");
  if (layers.length < 2) return;

  let index = 0;
  const intervalMs = 7000;

  const swap = () => {
    layers[index].classList.remove("is-active");
    index = (index + 1) % layers.length;
    layers[index].classList.add("is-active");
  };

  // Prefetch second image is already in DOM; start rotation after settle
  window.setInterval(swap, intervalMs);
})();
