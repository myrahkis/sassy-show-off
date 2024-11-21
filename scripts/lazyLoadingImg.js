const imgTargets = document.querySelectorAll("img[data-src]");

imgTargets.forEach((img) => {
  if (!img) return;

  img.src = img.dataset.src;

  img.addEventListener("load", function () {
    img.classList.remove("u-lazy-img");
  });
});
